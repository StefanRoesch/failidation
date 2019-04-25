import { Pool, PoolClient } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'dbuser',
  password: 'password',
  database: 'compup',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const withinConnection = async <T>(fn: (connection: PoolClient) => Promise<T>): Promise<T> => {
  const connection = await pool.connect();
  const result = await fn(connection);
  await connection.release()
  return result;
}