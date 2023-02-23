export async function getProgrammingJoke() {
  return fetch("https://v2.jokeapi.dev/joke/Programming?type=single").then(
    (res) => res.json()
  );
}
