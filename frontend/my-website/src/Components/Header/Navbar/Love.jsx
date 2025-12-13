import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
const Love = () => {
    return (
      <div>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
      </div>
    )
};

export default Love;