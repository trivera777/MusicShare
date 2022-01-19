import { InputAdornment, TextField, Button } from '@material-ui/core'
import { Link, AddBoxOutlined } from "@material-ui/icons"
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
            <Button
            variant="contained"
            color="primary"
            endIcon={<AddBoxOutlined />}
            >
                add
            </Button>
        </div>
        )
}

export default AddSong;