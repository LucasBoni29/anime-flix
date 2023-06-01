import CardAnime from "@/components/CardAnime";
import Header from "@/components/Header";
import SecaoAnimes from "@/components/SecaoAnimes";
import Titulo from "@/components/Titulo";
import { useState } from "react";

export default function Home() {

  const [animes, setAnimes] = useState([]);
  const [animesLancamento, setAnimesLancamento] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16,10759,10765', options)
    .then(response => response.json())
    .then(response => setAnimes(response.results))
    .catch(err => console.error(err));

  return (
    <> 
      <Header />
      <div>
        <img className="h-72 brightness-50 object-cover w-screen" src="https://www.themoviedb.org/t/p/original/6VJy1E7PcgjKj6pZjqTVPr8CFal.jpg" />
      </div>
      
      <main className="flex min-h-screen flex-col px-24">
        <Titulo>Animes em alta</Titulo>

        <SecaoAnimes animes={animes} />

        <Titulo>Melhores animes do momento</Titulo>
        <Titulo>Lançamentos</Titulo>

        <SecaoAnimes animes={animesLancamento}/>

      </main> //JSX
    </>
  )
  
}
