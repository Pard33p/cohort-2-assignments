// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require('fs');

function removeExtraSpaces(str) {
    return str.split(' ').filter(
        function(value) {
            return value.trim() !== ""
        }
    ).join(' ')
}
const filepath = 'file-with-extra-spaces.txt';
fs.readFile(filepath, 'utf8', function(err, value) {
    if(err) {
        console.error("Unable to read file", err);
        return;
    }
    const valueCleaned = removeExtraSpaces(value);
    fs.writeFile(filepath, valueCleaned, function(err) {
        if(err) {
            console.error("Unable to write", err);
        }
    });
})
