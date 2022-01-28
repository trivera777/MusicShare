import { Typography } from '@material-ui/core'
import React from 'react'

function QueuedSongList(){
    const song = {
        title: "after hours",
        artist: "53 Thieves",
        thumbnail:
          "https://i.ytimg.com/an_webp/8cQSCIWHwRQ/mqdefault_6s.webp?du=3000&sqp=CKTTx48G&rs=AOn4CLBzUKfsQ8jTYzg5GGZR75yqHxEYZg",
      };

    return (
        <div style={{ margin: '10px 0'}}>
            <Typography color="textSecondary" variant="button">
                Queue (5)
            </Typography>
            {Array.from({ length: 5 }, () => song).map((song, i) => (
                <QueuedSong key={i} song={song} />
            ))}
        </div>
    )
}

function QueuedSong({ song }){
    return <div>queuedsong</div>
}

export default QueuedSongList;