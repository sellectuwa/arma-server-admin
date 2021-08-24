import getDb from '../../lib/database';

export default async function handler(req, res) {
  const body = await req.body;

  const db = await getDb();

  if (body.username && body.password) {
    const { username, password } = body;

    const userData = db.data.admins.find((e) => e.username === username);

    if (userData && userData.password === password) {
      const user = { username: userData.username };
      db.write();
      return res.json(user);
    }
    return res.status(404).json('Wrong username or password');
  }
  return res.status(400).json('The request was invalid');
}
