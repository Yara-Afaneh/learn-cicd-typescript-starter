import dotenv from "dotenv";
dotenv.config();

type Config = {
  db: DBConfig;
  api: APIConfig;
};

type APIConfig = {
  port: string | undefined;
  filepathRoot: string;
};

type DBConfig = {
  url: string | undefined;
  // أضفنا هذا السطر هنا
  authToken: string | undefined;
};

export const config: Config = {
  api: {
    port: process.env.PORT,
    filepathRoot: "./src/assets",
  },
  db: {
    url: process.env.DATABASE_URL,
    // وأضفنا هذا السطر هنا ليقرأ من البيئة
    authToken: process.env.DB_AUTH_TOKEN,
  },
};
