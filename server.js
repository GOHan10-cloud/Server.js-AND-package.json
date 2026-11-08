import express from 'express';
const app = express();
app.use(express.json());

app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === process.env.WEBHOOK_VERIFY_TOKEN) {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', (req, res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => console.log('Servidor listo'));
