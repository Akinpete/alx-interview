#!/usr/bin/node

function getCharacters(movieId) {
    // Get the movie data
    const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;
    fetch(movieUrl)
      .then(response => response.json())
      .then(movieData => {
        // Get the list of character URLs
        const characterUrls = movieData.characters;
  
        // Fetch and print each character's name
        characterUrls.forEach(url => {
          fetch(url)
            .then(response => response.json())
            .then(characterData => {
              console.log(characterData.name);
            })
            .catch(error => console.error('Error fetching character:', error));
        });
      })
      .catch(error => console.error('Error fetching movie:', error));
  }
  
  // Check if a movie ID was provided as a command-line argument
  if (process.argv.length !== 3) {
    console.log("Usage: ./script.js <movie_id>");
    process.exit(1);
  }
  
  const movieId = process.argv[2];
  getCharacters(movieId);
  