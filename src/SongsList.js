import { SongCard } from "./SongCard";
import { songsList } from "./songlist";

export function SongsList({songlist, setList}) {

  return (
    <div>
      <h1 className="title">🎵Trending Songs List🎼</h1>
      <p style={{fontSize: "18px", opacity: "0.8"}}>To play the video, Just click song which you want👆</p>
      <div  className="box">
          {songlist.map(({image, title, movie}, index) => (
        <SongCard
        key={index}
          id={index}
          image={image}
          title={title}
          movie={movie}
          list={songlist} 
          setList={setList}
        />
      ))}
      
      </div>
      
    </div>
  );
}

