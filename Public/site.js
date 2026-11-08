const getjokeButton = document.getElementById("getJoke");
const jokeElement = document.getElementById("joke");
const punchlineElement = document.getElementById("punchline");

getjokeButton.addEventListener("click", async () => {
    const response = await fetch("/api/v1/random-joke");
    const joke = await response.json()

    jokeElement.textContent = joke.setup
    punchlineElement.textContent = joke.punchline
})