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
    >
      {text}
    </Button>
  )
}

export default ReusableButton
