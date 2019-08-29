var Spotify = require('node-spotify-api');
const axios = require('axios');

var kinds = process.argv[2];
var music = process.argv.slice(3);

var spotify = new Spotify({
    id: 'c43dd26b0bcf4ea297115cf96e5dacc6',
    secret: '87c2388cf0fe4ae383be28689e247792'
});

if (kinds == 'music') {
    spotify.search({ type: 'track', query: music }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items[0].album.name);
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("URL: " + data.tracks.items[0].preview_url);
        console.log("Album: " + data.tracks.items[0].album.name);
    });
}
var movie = process.argv.slice(3).join(' ');

var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=9d060ecd";
console.log(queryURL);

if (kinds == 'movie') {
    axios.get(queryURL).then(
        function(movieResponse) {
            console.log("Title: " + movieResponse.data.Title);
            console.log("Year: " + movieResponse.data.Year);
            console.log("Rated: " + movieResponse.data.imdbRating);
            console.log("Country: " + movieResponse.data.Country);
            console.log("Language: " + movieResponse.data.Language);
            console.log("Plot: " + movieResponse.data.Plot);
            console.log("Actors: " + movieResponse.data.Actors);
            console.log("Rotten Tomatoes: " + movieResponse.data.Ratings[1].Value);
        }
    );
};