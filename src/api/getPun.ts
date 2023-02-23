export async function getPun() {
  return fetch("https://v2.jokeapi.dev/joke/Pun?type=single").then((res) =>
    res.json()
  );
}
