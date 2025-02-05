import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema  from './schema';
import dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config({ path: '.env.local' });

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
const db = drizzle(sql,{schema});