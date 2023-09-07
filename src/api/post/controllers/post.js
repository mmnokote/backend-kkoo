"use strict";
/**
 *  [collection-name] controller
 */
const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async find(ctx) {
    const { data, meta } = await super.find(ctx);
    const query = strapi.db.query("api::post.post");
    await Promise.all(
      data.map(async (item, index) => {
        const foundItem = await query.findOne({
          where: {
            id: item.id,
          },
          populate: ["createdBy", "updatedBy"],
        });

        data[index].attributes.createdBy = {
          id: foundItem.createdBy.id,
          firstname: foundItem.createdBy.firstname,
          lastname: foundItem.createdBy.lastname,
          email: foundItem.createdBy.email,
          username: foundItem.createdBy.username,
        };
        data[index].attributes.updatedBy = {
          id: foundItem.updatedBy.id,
          firstname: foundItem.updatedBy.firstname,
          lastname: foundItem.updatedBy.lastname,
          email: foundItem.createdBy.email,
          username: foundItem.createdBy.username,
        };
      })
    );
    return { data, meta };
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi
      .service("api::post.post", { populate: ["createdBy"] })
      .findOne(id, query);
    const sanitized = await this.sanitizeOutput(entity, ctx);

    sanitized.createdBy = {
      id: entity.createdBy.id,
      firstname: entity.createdBy.firstname,
      lastname: entity.createdBy.lastname,
      email: entity.createdBy.email,
      username: entity.createdBy.username,
    };

    return this.transformResponse(sanitized);
  },

  async findBySlug(ctx) {
    const { slug } = ctx.params;
    const { query } = ctx;

    const entity = await strapi
      .service("api::post.post", { populate: ["createdBy"] })
      .findOne(slug, query);
    const sanitized = await this.sanitizeOutput(entity, ctx);

    sanitized.createdBy = {
      id: entity.createdBy.id,
      firstname: entity.createdBy.firstname,
      lastname: entity.createdBy.lastname,
      email: entity.createdBy.email,
      username: entity.createdBy.username,
    };

    return this.transformResponse(sanitized);
  },
}));
