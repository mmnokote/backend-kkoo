'use strict';

/**
 * call-center service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::call-center.call-center');
