import { CircularProgress } from '@material-ui/core';
import React from 'react'

function SongList(){
    let loading = false;

    const song = {
        title: "after hours",
        artist: "53 Thieves",
        thumbnail: "https://www.youtube.com/watch?v=8cQSCIWHwRQ"
    }

    if (loading){
        return (
            <div style={{
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 50
                
            }}
            >
                <CircularProgress/>
            </div>
        )
    }
    return <div>{Array.from({ length: 10 }, () => song ).map((song, i) => (
        <Song key={i} song={song} />
    ))}</div>
}

function Song(){
    return <div>song</div>
}
export default SongList;