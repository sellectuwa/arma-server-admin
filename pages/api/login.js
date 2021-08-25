import { v4 as uuid } from 'uuid';
import getDb from '../../lib/database';

export default async function handler(req, res) {
  const { username, password } = await req.body;

  const db = await getDb();

  if (!username || !password) {
    return res.status(400).json('The request was invalid');
  }

  const userData = db.data.admins.find((e) => e.username === username);

  if (userData && userData.password === password) {
    const sessionId = uuid();
    const user = { username: userData.username, sessionId };
    userData.sessionId = sessionId;
    db.write();
    return res.json(user);
  }
  return res.json({ msg: 'Wrong username or password' });
}
