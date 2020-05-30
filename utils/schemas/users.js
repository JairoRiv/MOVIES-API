const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserSchema = {
  name: joi.string().max(100).require(),
  email: joi.string().email().require(),
  password: joi.string().require(),
  isAdmin: joi.boolean(),
};

module.exports = {
  userIdSchema,
  createUserSchema,
};
