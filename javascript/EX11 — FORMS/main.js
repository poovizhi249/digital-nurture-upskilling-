function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Submitted: " + name);
}