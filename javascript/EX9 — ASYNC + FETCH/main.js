async function loadData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();
        console.log(data.slice(0, 3));
    } catch (err) {
        console.log("Error loading data");
    }
}

loadData();