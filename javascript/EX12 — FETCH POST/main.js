fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ name: "User" }),
    headers: { "Content-Type": "application/json" }
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));