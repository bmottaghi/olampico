/**
 * Router for individuals-league with custom "start" route
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::individuals-league.individuals-league', {
  config: {
    find: {},
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
  only: ['find', 'findOne', 'create', 'update', 'delete'],
  except: [],
  prefix: '',
});
