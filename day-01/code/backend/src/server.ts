import mongoose from "mongoose";
import app from "./app";
import { envConfig } from "@config/env.config";

const PORT = envConfig.app.port;

const mongoUrl = `${envConfig.mongo.url}/${envConfig.mongo.name}${
  envConfig.app.env === "development" && "_test"
}`;

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(
        `🚀 Server is running at ${envConfig.app.baseUrl} ${
          envConfig.app.env !== "development"
            ? `and listening on Port :${PORT}`
            : ""
        }`
      );
    });
  })
  .catch(() => {
    console.log("❌ MongoDB connection failed");
  });
