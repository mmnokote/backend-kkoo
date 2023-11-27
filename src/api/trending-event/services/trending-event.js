'use strict';

/**
 * trending-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trending-event.trending-event');
