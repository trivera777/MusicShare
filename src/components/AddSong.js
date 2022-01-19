import { InputAdornment, TextField, Button, Dialog } from "@material-ui/core";
import { Link, AddBoxOutlined } from "@material-ui/icons";
import React from "react";

function AddSong() {
    const [dialog, setDialog] = React.useState(false)

    function handleSetDialog(){
        setDialog(false)
    }

  return (
    <div>
        <Dialog
        open={dialog}
        onclose={handleSetDialog}
        >
            
        </Dialog>
      <TextField
        placeholder="Add Youtube or Soundcloud URL"
        fullWidth
        margin="normal"
        type="url"
        InputProps={{
          startAdornment: <InputAdornment>{/* <Link /> */}</InputAdornment>,
        }}
      />
      <Button 
      onClick={() => setDialog(true)}
      variant="contained" color="primary" endIcon={<AddBoxOutlined />}>
        add
      </Button>
    </div>
  );
}

export default AddSong;
