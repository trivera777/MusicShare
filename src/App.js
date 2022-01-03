import React from "react";
import Header from './components/Header'
import AddSong from './components/AddSong'
import QueuedSong from './components/QueuedSong'
import SongList from './components/SongList'
import SongPlayer from './components/SongPlayer'

function App() {
  return (
  <div>
    <Header />
    <AddSong />
    <QueuedSong />
    <SongList />
    <SongPlayer />
    </div>
  )
}

export default App;
