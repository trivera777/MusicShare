import { Avatar, IconButton, Typography, makeStyles } from '@material-ui/core'
import { Delete } from "@material-ui/icons";
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

makeStyles({
    avatar: {
        width: 44,
        height: 44,
    },
    te
})

function QueuedSong({ song }){
    const { thumbnail, artist, title } = song
    return (
    <div>
     <Avatar src={thumbnail} alt="Song Thumbnail" />
     <div>
         <Typography variant="subtitle2">
             {title}
         </Typography>
         <Typography color="textSecondary" variant="body2">
             {artist}
         </Typography>
     </div>
     <IconButton>
         <Delete color="error" />
     </IconButton>
    </div>
        )
}

export default QueuedSongList;