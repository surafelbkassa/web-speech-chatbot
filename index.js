import express from 'express';
port = 3000;
const app = express();

app.use(express.json());

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/views'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});