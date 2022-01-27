import { CardContent, Typography, Card, IconButton } from '@material-ui/core'
import { SkipPrevious } from '@material-ui/icons'
import React from 'react'
import QueuedSongs from './QueuedSongs'

function SongPlayer(){
    return (
    <div>
        <Card varient="outlined">
            <div>
                <CardContent>
                    <Typography variant="h5" component="h3">
                        Title
                    </Typography>
                    <Typography variant="subtitle1" component="p" color="textSecondary">
                        Artist
                    </Typography>
                </CardContent>
                <div>
                    <IconButton>
                        <SkipPrevious />
                    </IconButton>
                    </div>
            </div>
        </Card>
        <QueuedSongs />
    </div>
    )
}

export default SongPlayer;