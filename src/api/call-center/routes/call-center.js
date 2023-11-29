'use strict';

/**
 * call-center router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::call-center.call-center');
