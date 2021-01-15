import { MongoClient } from 'mongodb';
// import nextConnect from 'next-connect';
//process.env esta acessando todo conteudo de .env.local
const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
export default async function connect(req, res, next) {
  //checa se já esta conectado . se não executa o connect
  if (!client.isConnected()) await client.connect();
  // req.dbClient = client;
  //nome do banco de dado
  const db = client.db('email-received').collection('messages');
  return {db, client};
  console.log(db);
  console.log(client);
}

// const middleware = nextConnect();

// middleware.use(connect);

// export default middleware;