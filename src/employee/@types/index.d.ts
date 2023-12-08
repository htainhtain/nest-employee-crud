import { Database } from './src/interfaces/employee';
import { Kysely } from 'kysely';

export type DB = Kysely<Database>;
