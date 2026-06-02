let events = [
    { name: "Music Night", seats: 5, date: "2026-06-10" },
    { name: "Tech Meetup", seats: 0, date: "2024-01-01" }
];

let today = new Date("2026-06-02");

events.forEach(event => {
    let eventDate = new Date(event.date);

    if (eventDate < today || event.seats <= 0) {
        console.log(event.name + " not available");
    } else {
        console.log(event.name + " available");
    }
});