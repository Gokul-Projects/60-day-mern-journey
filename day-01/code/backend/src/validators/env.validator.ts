import Joi from "joi";

export const envValidator = Joi.object({
    // App Setup
    APP_NAME: Joi.string().required(),
    APP_VERSION: Joi.string().required(),
    PORT: Joi.number().integer().required(),
    BASE_URL: Joi.string().required(),
    ENVIRONMENT: Joi.string().required(),

    // mongo db

    MONGO_URL: Joi.string().required(),
    MONGO_DB_NAME: Joi.string().required(),
}) 