import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "turso",
  dbCredentials: {
    // ضعي رابط قاعدة بياناتك هنا بين علامتي تنصيص
    url: "libsql://notely-db-yara-afaneh.aws-eu-west-1.turso.io",
    // ضعي التوكن (المفتاح الطويل) هنا بين علامتي تنصيص
    authToken: "your-very-long-token-here",
  },
});
