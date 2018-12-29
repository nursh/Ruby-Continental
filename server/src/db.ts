import { createConnection } from 'typeorm';

export default async function getConnection() {
  const connection = await createConnection();
  return connection;
}