function addEvent(name) {
    console.log("Event added:", name);
}

function registerUser(category) {
    let count = 0;

    return function () {
        count++;
        console.log(category + " registrations: " + count);
    };
}

let music = registerUser("Music");

music();
music();