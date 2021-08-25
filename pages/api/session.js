import getDb from '../../lib/database';

export default async function handler(req, res) {
  const { sessionId } = await req.body;

  const db = await getDb();

  if (!sessionId) {
    return res.status(400).json('The request was invalid');
  }

  const userData = db.data.admins.find((e) => e.sessionId === sessionId);

  if (userData) {
    const user = { username: userData.username };
    return res.json(user);
  }
  return res.json({ msg: 'Wrong username or password' });
}
