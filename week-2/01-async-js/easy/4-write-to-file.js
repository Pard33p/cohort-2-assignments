// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const filepath = "sample-file.txt";
const content = "The curious cat danced gracefully under the shimmering moonlight, casting mysterious shadows on the old, weathered wall.";
fs.writeFile(
    filepath,
    content,
    function(err) {
        if(err) {
            console.error("Error occurred while writing", err);
        }
    }
);