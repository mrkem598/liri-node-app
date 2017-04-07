# liri-node-app
LIRI app is more of like cortana of Window 10 or siri of iPhone. LIRI will accept command-line input unlike the other two where they respond for speech input.

Use the following Command to get some fun with this app
  # node liri.js my-tweets
This will show your last 20 tweets and when they were created at in your terminal/bash window.
  # node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
if no song is provided then your program will default to
"The Sign" by Ace of Base
    # node liri.js movie-this '<movie name here>'
This will output the following information to your terminal/bash window:
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
   * Rotten Tomatoes Rating.
   * Rotten Tomatoes URL.
If you doesn't type a movie in, the program will output data for the movie # 'Mr. Nobody.'
If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
It's on Netflix!
    # node liri.js do-what-it-says
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

# Hopefully you have got some fun with this development. Fork the app if you wish to <a href="https://github.com/mrkem598/liri-node-app">here</a>
