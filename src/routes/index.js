const express = require('express');
const router = express.Router();
const md5 = require('md5');
const request = require('request');

const privateKey = '279d6455eeb893a9e1846f9a5fa1529430dabe8a';
const publicKey = 'bda60159f74d5d773aee170d20930202';

function createHash(timeStamp) {
  const toBeHashed = timeStamp + privateKey + publicKey;
  const hashedMessage = md5(toBeHashed);
  return hashedMessage;
}

const timeStamp = Date.now().toString();
const hash = createHash(timeStamp);
const path = '/v1/public/characters';

router.get('/', (req, res, next) => {
  const limit = req.query.limit || 20;
  console.log(req.query);
  request(
    'http://gateway.marvel.com' +
      path +
      '?' +
      'ts=' +
      timeStamp +
      '&apikey=' +
      publicKey +
      '&hash=' +
      hash +
      '&limit=' +
      limit,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.status(200).send(body);
      }
    }
  );
});

module.exports = router;
