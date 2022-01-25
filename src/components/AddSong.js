import {
  InputAdornment,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { Link, AddBoxOutlined } from "@material-ui/icons";
import React from "react";

function AddSong() {
  const [dialog, setDialog] = React.useState(false);

  function handleSetDialog() {
    setDialog(false);
  }

  return (
    <div>
      <Dialog open={dialog} onClose={handleSetDialog}>
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <img src="" alt="Song thumbnail" />
          <TextField margin="dense" name="title" label="Title" fullWidth />
          <TextField margin="dense" name="artist" label="Artist" fullWidth />
          <TextField
            margin="dense"
            name="thumbnail"
            label="Thumbnail"
            fullWidth
          />
        </DialogContent>
      </Dialog>
      <TextField
        placeholder="Add Youtube or Soundcloud URL"
        fullWidth
        margin="normal"
        type="url"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <Link />
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={() => setDialog(true)}
        variant="contained"
        color="primary"
        endIcon={<AddBoxOutlined />}
      >
        add
      </Button>
    </div>
  );
}

export default AddSong;
