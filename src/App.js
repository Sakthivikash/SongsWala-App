import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { SongsList } from "./SongsList";
import { AddNewSong } from "./AddNewSong";
import { songsList } from "./songlist";
import { useState } from "react";
import { EditSong } from "./EditSong";
import HomeIcon from '@mui/icons-material/Home';
import { VideoSong } from "./VideoSong";
import { Home } from "./Home";


function App() {
  const history = useHistory();

  const [list, setList]= useState(songsList);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <LibraryMusicIcon />
          <Typography
            className="logo"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            
            SongsWala
          </Typography>
          <Button onClick={() => history.push("/")} color="inherit">
            <HomeIcon />
          </Button>
          <Button onClick={() => history.push("/songs-list")} color="inherit">
            SongsList
          </Button>
          <Button onClick={() => history.push("/add-song")} color="inherit">
            AddSong
          </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/songs-list">
          <SongsList songlist={list} setList={setList}/>
        </Route>
        <Route path="/songs/:id">
          <VideoSong />
        </Route>
        <Route path="/song-edit/:id">
          <EditSong songlist={list} setList={setList}/>
        </Route>
        <Route path="/add-song">
          <AddNewSong songlist={list} setList={setList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


