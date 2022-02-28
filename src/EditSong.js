import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";


export function EditSong({songlist, setList}) {
    const history= useHistory();
    const {id} = useParams();
    const Song= songlist[id];

    const [Video, setvideo] = useState(Song.video);
    const [Image, setimage] = useState(Song.image);
    const [Name, setname] = useState(Song.title);
    const [Movie, setmovie] = useState(Song.movie);
    const [Music, setmusic] = useState(Song.music);
    const [Singers, setsingers] = useState(Song.singers);
    const [Cast, setcast] = useState(Song.cast);
    const [Lyrics, setlyrics] = useState(Song.lyrics);
  return (
    <div className='Editform'>
    <div className='inputdata'>
    <h1 className="title">✏️Edit The Song Here📝</h1>
      <div className='inputs'>
        <TextField id="outlined-basic" label="Video URL" value={Video}
          onChange={(event) => setvideo(event.target.value)} variant="outlined"/><br />

        <TextField id="outlined-basic" label="Poster" value={Image}
          onChange={(event) => setimage(event.target.value)} variant="outlined"/><br />

        <TextField id="outlined-basic" label="Song" value={Name}
          onChange={(event) => setname(event.target.value)} variant="outlined"/><br />

        <TextField id="outlined-basic" label="Movie" value={Movie}
          onChange={(event) => setmovie(event.target.value)} variant="outlined"/><br />

        <TextField id="outlined-basic" label="music"value={Music}
          onChange={(event) => setmusic(event.target.value)} variant="outlined" /><br />

        <TextField id="outlined-basic" label='Singers'value={Singers}
          onChange={(event) => setsingers(event.target.value)} variant="outlined" />  <br />

        <TextField id="outlined-basic" label='Starring'value={Cast}
          onChange={(event) => setcast(event.target.value)} variant="outlined" />  <br />

        <TextField id="outlined-basic" label='Lyrics writer'value={Lyrics}
          onChange={(event) => setlyrics(event.target.value)} variant="outlined" /><br />
       

      </div>
      <div id='addbtn'>
        <Button className="addbtn" variant="contained" style={{backgroundColor: "#06c947"}}
        onClick={() => {
          const updatedSong= {
            video:Video,
            title:Name,
            image:Image,
            movie:Movie,
            singers:Singers,
            music:Music,
            cast:Cast,
            lyrics:Lyrics
          };
          const copyList= [...songlist];
          copyList[id]= updatedSong;
          console.log(copyList);
          setList(copyList);
          history.push('/songs-list');
        }}>Update</Button>

        <Button className="addbtn" variant="contained"
         color="error"
         style={{margin: "10px"}}
         onClick={() => {
          history.goBack();
        }}>Cancel</Button>
      </div>
     </div>
</div>
  );
}
