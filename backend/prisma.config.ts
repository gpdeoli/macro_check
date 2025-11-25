import 'dotenv/config';
import { defineConfig, env } from '@prisma/config';
import { env as nodeEnv } from 'node:process';

const databaseUrl = env('DATABASE_URL');
const shadowUrl = nodeEnv.DIRECT_URL ?? nodeEnv.DATABASE_URL;

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: databaseUrl,
    shadowDatabaseUrl: shadowUrl
  }
});

