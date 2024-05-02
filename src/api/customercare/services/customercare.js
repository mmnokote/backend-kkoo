'use strict';

/**
 * customercare service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customercare.customercare');
