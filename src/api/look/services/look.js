'use strict';

/**
 * look service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::look.look');
