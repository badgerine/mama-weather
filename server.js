const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const mockData = require('./src/assets/openweather.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/weatherdata', (req, res) => {

  let remoteUrl = req.body.remoteUrl;
  let remoteStatus = null;
  let remoteResult = null;

  console.log('remoteUrl=', remoteUrl);
  // axios.get(remoteUrl)
  //   .then(remoteRes => { 
  //     remoteStatus = remoteRes.status;
  //     remoteResult = remoteRes.data;
  //     console.log('remoteRes.data=', remoteResult);
  //     res.statusCode=remoteStatus;
  //     res.send(remoteResult); 
      
  //   })
  //   .catch(err => console.log('oops something went wrong',err));
  res.statusCode=('200');
  res.json(mockData).send();
})

app.listen(4000, () => console.log('running on port 4000'));