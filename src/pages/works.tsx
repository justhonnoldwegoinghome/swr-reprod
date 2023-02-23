import useSWR from "swr";

import { getJoke } from "@/api/getJoke";
import { getProgrammingJoke } from "@/api/getProgrammingJoke";
import { getPun } from "@/api/getPun";

export default function App() {
  const { data: joke } = useSWR("joke", getJoke);
  const { data: programmingJoke } = useSWR(
    "programming-joke",
    getProgrammingJoke
  );
  const { data: pun } = useSWR("pun", getPun);

  if (!joke || !programmingJoke || !pun) return <div>Loading...</div>;

  return (
    <div>
      <p>{joke.joke}</p>
      <br />
      <p>{programmingJoke.joke}</p>
      <br />
      <p>{pun.joke}</p>
    </div>
  );
}
