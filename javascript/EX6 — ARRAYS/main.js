let events = ["Music", "Tech", "Food"];

events.push("Dance");

let music = events.filter(e => e === "Music");

let mapped = events.map(e => "Event: " + e);

console.log(mapped);