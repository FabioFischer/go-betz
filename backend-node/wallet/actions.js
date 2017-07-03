const transactionHelper = require('./../helpers/transaction');

const addCredits = async (request, response) => {
  const { userId, value } = request.body;

  try {
    await transactionHelper.newTransaction('add_credits', value, userId);
    response.json({ success: true });
  } catch (e) {
    response.status(500).json();
  }
};

const recoverCredits = async (request, response) => {

};

const checkCredits = async (request, response) => {
  const { userId } = request.body;

  try {
    const total = await transactionHelper.getTransactionsTotal(userId);

    response.json(total);
  } catch (e) {
    response.status(500).json();
  }
};

module.exports = { addCredits, recoverCredits, checkCredits };

