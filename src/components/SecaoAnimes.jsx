import CardAnime from "./CardAnime";

export default function SecaoAnimes(props){
    const {animes} = props
    return (
        <div className="flex flex-wrap">
            { animes.map(anime => <CardAnime anime={anime} />) }
        </div>
    )
}