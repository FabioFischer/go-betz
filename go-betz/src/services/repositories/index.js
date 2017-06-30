import baseRepo from './base';

export default {
  matchesRepository: baseRepo.create('matches', 'Match'),
  teamsRepository: baseRepo.create('team', 'Team'),
  betsRepository: baseRepo.create('bets', 'MatchBet'),
  transactionsRepository: baseRepo.create('transaction', 'Transaction'),
  fundsRepository: baseRepo.create('fund', 'Wallet')
};