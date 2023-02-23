import useSWR from "swr";

import { getJoke } from "@/api/getJoke";
import { getProgrammingJoke } from "@/api/getProgrammingJoke";
import { getPun } from "@/api/getPun";

export default function App() {
  const joke = useSWR("joke", getJoke);
  const programmingJoke = useSWR("programming-joke", getProgrammingJoke);
  const pun = useSWR("pun", getPun);

  if (!joke.data || !programmingJoke.data || !pun.data)
    return <div>Loading...</div>;

  return (
    <div>
      <p>{joke.data.joke}</p>
      <br />
      <p>{programmingJoke.data.joke}</p>
      <br />
      <p>{pun.data.joke}</p>
    </div>
  );
}
