#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Invalid status code:', response.statusCode);
    return;
  }

  const film = JSON.parse(body);
  const characters = film.characters;

  const fetchCharacter = (index) => {
    if (index >= characters.length) return;

    request(characters[index], (charError, charResponse, charBody) => {
      if (charError) {
        console.error('Error fetching character:', charError);
        fetchCharacter(index + 1);
        return;
      }

      if (charResponse.statusCode !== 200) {
        console.error('Invalid character status code:', charResponse.statusCode);
        fetchCharacter(index + 1);
        return;
      }

      const character = JSON.parse(charBody);
      console.log(character.name);
      fetchCharacter(index + 1);
    });
  };

  fetchCharacter(0);
});
