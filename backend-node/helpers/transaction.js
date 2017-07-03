const crypto = require('crypto');
const algorithm = process.env.ALGORITHM;
const password = process.env.TRANSACTION_PASSWORD;

const models = require('./../models');
const Transaction = models.t_transaction;
const Bet = models.t_match_bets;

const getMatchBets = async match => {
  const bets = await Bet.findAll({ where: { match_id: match } });

  return bets.map(bet => bet.dataValues);
};

const encryptValue = (value = '') => {
  const cipher = crypto.createCipher(algorithm, password);
  let encrypted = cipher.update(value.toString(), 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
};

const getBetReturn = (total, bet, winAmount) => {
  const ourCut = total * 0.1; // we get 10%.
  const realTotal = total - ourCut;

  const betReturn = (((((bet * 100) / realTotal) * 100) / winAmount) * realTotal) / 100;
};

const decryptValue = (value = '') => {
  const decipher = crypto.createDecipher(algorithm, password);
  let decrypted = decipher.update(value.toString(), 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
};

const newTransaction = async (type, value, user) => {
  const encryptedValue = encryptValue(value);

  const transaction = await Transaction.create({
    value: encryptedValue,
    user_id: user,
    type: type
  });

  return transaction.dataValues;
};

const solveBets = async match => {
  const bets = await getMatchBets(match.id);

  const winningBets = bets.filter(bet => bet.pick_id === match.winner_id);

  const totalValue = bets.reduce((total, bet) => total + (parseFloat(bet.value) || 0), 0);
  const totalWinningValue = winningBets.reduce((total, bet) => total + (parseFloat(bet.value) || 0), 0);

  winningBets.forEach(bet => {
    const betReturn = getBetReturn(totalValue, bet.value, totalWinningValue);

    newTransaction('win_bet', betReturn, bet.user_id);
  });
};

const getTransactionsTotal = async (user) => {
  const transactions = await Transaction.findAll({ where: { user_id: user } });
  const normalizedValues = transactions.map(tr => tr.dataValues);

  const totalValues = normalizedValues.reduce((totalValue, tr) => {
    const decryptedValue = decryptValue(tr.value);

    if (['new_bet', 'lost_bet', 'recover_credits'].includes(tr.type)) {
      return totalValue - (parseFloat(decryptedValue) || 0);
    } else {
      return totalValue + (parseFloat(decryptedValue) || 0);
    }

  }, 0);

  return totalValues;
};

module.exports = { solveBets, newTransaction, getTransactionsTotal };