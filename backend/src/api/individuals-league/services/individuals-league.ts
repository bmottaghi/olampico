/**
 * individuals-league service
 */

import { factories } from '@strapi/strapi';

interface League {
  id: number;
  participant_type: 'team' | 'individual';
  min_participants: number;
  team_type_members?: Array<{ id: number }>;
  player_type_members?: Array<{ id: number }>;
  league_status?: 'waiting' | 'ongoing' | 'completed';
}

export default factories.createCoreService('api::individuals-league.individuals-league');
