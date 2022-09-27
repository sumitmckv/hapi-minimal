import * as Joi from 'joi';

export default {
  hello: {
    params: Joi.object({
        name: Joi.string().min(3).max(10),
    }),
  }
};
