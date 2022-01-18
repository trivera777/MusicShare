import { InputAdornment, TextField } from '@material-ui/core'
import React from 'react'

function AddSong(){
    return (
        <div>
            <TextField 
            placeholder="Add Youtube or Soundcloud URL"
            fullWidth
            margin="normal"
            type="url"
            InputProps={{
                startAdornment: (
                    <InputAdornment>
                    {/* <Link /> */}
                    </InputAdornment>
                )
            }}
            />
        </div>
        )
}

export default AddSong;