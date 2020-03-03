import * as Joi from '@hapi/joi';

export default {
  hello: {
    params: {
      name: Joi.string().required(),
    },
  }
};
