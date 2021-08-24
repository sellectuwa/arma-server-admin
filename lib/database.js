import path from 'path';
import { JSONFile, Low } from 'lowdb';

const db = new Low(new JSONFile(path.join(process.env.ROOT, 'db.json')));

const getDb = async () => {
  await db.read();

  return db;
};

export default getDb;
