export async function getJoke() {
  return fetch("https://v2.jokeapi.dev/joke/Any?type=single").then((res) =>
    res.json()
  );
}
