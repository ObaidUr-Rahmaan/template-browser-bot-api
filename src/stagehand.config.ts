import type { ConstructorParams } from "@browserbasehq/stagehand";
import dotenv from "dotenv";

dotenv.config();

const StagehandConfig: ConstructorParams = {
  env: "BROWSERBASE" as const,
  apiKey: process.env.BROWSERBASE_API_KEY,
  projectId: process.env.BROWSERBASE_PROJECT_ID,
  debugDom: true,
  headless: true,
  domSettleTimeoutMs: 30_000,
  browserbaseSessionCreateParams: {
    projectId: process.env.BROWSERBASE_PROJECT_ID!,
  },
  enableCaching: false,
  modelName: "gpt-4o",
  modelClientOptions: {
    apiKey: process.env.OPENAI_API_KEY,
  },
};

export default StagehandConfig; 