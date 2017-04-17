var request = require('request');
//declare variable to read a file
var fs = require('fs');
//accept 1st user input to the commandline
var firstCommand = process.argv[2];
//accept 2nd user input in the commandline
var secondCommand = process.argv[3];
// for loop to process multiple word to the process argv input
// attention that i starts from 4
for (i=4; i < process.argv.length; i++) {
    secondCommand += "+" + process.argv[i];
} 
//writing the main function for the movie to be able to acces the ombdapi 
function myMovie(){

    console.log("Let's access our selected movie");

    // check to see if movie name argument is entered and what to do if not
    var movieName;

    if(secondCommand === undefined){
        // for nonworking commandline entry we will play Mr. Nobody movie
        movieName = "Mr. Nobody";
    } 
    else {
        //If it is not we will take the second command 
        movieName = secondCommand;
    };

    // after we have the movie name we will run a request to the OMDB API with the movie name
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
//sending the request or if it is error will respond us 200
    request(queryUrl, function(error, response, body){
        if(!error && response.statusCode === 200) {
            // we will be getting the following in the console command line as a json file
            console.log("Movie Title: " + JSON.parse(body)["Title"]);
            console.log("Release Year: " + JSON.parse(body)["Year"]);
            console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
            console.log("Country: " + JSON.parse(body)["Country"]);
            console.log("Language: " + JSON.parse(body)["Language"]);
            console.log("Plot: " + JSON.parse(body)["Plot"]);
            console.log("Actors: " + JSON.parse(body)["Actors"]);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
            console.log("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);
        };

    })
}; 
// a function to read from the txt file what we have stored   
function givenCommand(){
    console.log("Read the command from 'random.txt' file");
// reading the file as per the correct path ilistrated below
    fs.readFile("random.txt","utf8", function(error,data){
        if(error){
            console.error(error);
        } 
        else {
// the data will be sliced or splited 
            var textArray = data.split(',');
            firstCommand = textArray[0];
            secondCommand = textArray[1];

// commandline if it is multiple word 
                for (i=2; i< textArray.length; i++) {
                    secondCommand = secondCommand + "+" + textArray[i];
                }; 
            }; 

        }); 
}; 
// function to write the created file
function createdFile(){
// getting acces to write a file
    fs.appendFile('log.txt', ' written file ', function(error){

        if (error) {
            return console.log(error);
        } 
        else {
            console.log('log file created');
    }
});
};
//caling back the function back to execute
myMovie();
givenCommand();
createdFile();
module.exports = createdFile;
module.exports = givenCommand;