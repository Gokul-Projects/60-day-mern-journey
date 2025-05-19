// src/config/env.config.ts
import { configDotenv, DotenvConfigOptions } from "dotenv";
import path from "path";
import { envValidator } from "../validators/env.validator";
import { mongo } from "mongoose";

console.log(process.env.ENVIRONMENT,"process.env.ENVIRONMENT")

const envPath = path.resolve(
  process.cwd(),
  `.env.${process.env.ENVIRONMENT || 'development'}`
);

const envConfigOptions: DotenvConfigOptions = {
  path: envPath,
  debug: process.env.ENVIRONMENT === "development",
};

configDotenv(envConfigOptions);

const { error, value } = envValidator.validate(process.env, {
  allowUnknown: true,
  abortEarly: false,
});

if (error) {
  console.error("❌ Environment variable validation error:", error.details);
  process.exit(1);
} else {
  console.log("✅ Environment variables loaded and validated successfully");
}

export const envConfig = {
  app: {
    appName: value.APP_NAME,
    appVersion: value.APP_VERSION,
    port: parseInt(value.PORT),
    env: value.ENVIRONMENT,
    baseUrl: value.BASE_URL
  },
  mongo: {
    url: value.MONGO_URL,
    name: value.MONGO_DB_NAME,
  }
};
