import Button from '@mui/material/Button'
import React from 'react'

const ReusableButton = ({
  endIcon,
  variant,
  startIcon,
  color,
  onClick,
  disabled,
  fullWidth,
    text,
  sx
}) => {
  return (
    <Button
      onClick={onClick}
      color={color}
      startIcon={startIcon}
      variant={variant}
      endIcon={endIcon}
      disabled={disabled}
          fullWidth={fullWidth}
          sx={sx}
    >
      {text}
    </Button>
  )
}

export default ReusableButton
