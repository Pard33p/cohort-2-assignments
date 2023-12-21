// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
};

setInterval(
    function() {
        const currTime = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedTime = formatter.format(currTime);
        console.log(formattedTime);
    },
    1000
);