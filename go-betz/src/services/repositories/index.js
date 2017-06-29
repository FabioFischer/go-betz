import baseRepo from './base';

export default {
  matchesRepository: baseRepo.create('matches', 'Match'),
  teamsRepository: baseRepo.create('teams', 'Team'),
  betsRepository: baseRepo.create('bets', 'MatchBet'),
  transactionsRepository: baseRepo.create('transaction', 'Transaction'),
  walletsRepository: baseRepo.create('wallets', 'Wallet')
};