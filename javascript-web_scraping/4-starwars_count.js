#!/usr/bin/node
<<<<<<< HEAD
const process = require('process');
const request = require('request');
const api = process.argv[2];

request(api, function (error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  }
  const films = JSON.parse(response.body); // Print the response status code if a response was received
  const filtered = films.results.filter(film => {
    for (const character of film.characters) {
      if (character.includes('18')) {
        return true;
      }
    }
    return false;
  });
  console.log(filtered.length);
});
=======

const axios = require('axios');
let count = 0;

axios.get(process.argv[2])
  .then(function (response) {
    response.data.results.forEach(element => {
      element.characters.forEach(movies => {
	if (movies.includes('18')) {
	  count++;
	}
      });
    });
    console.log(count);
  })
  .catch(function (error) {
    console.log(error);
  });
>>>>>>> 041022ee41bc80e437f3211a2813c1e73e96db4d
