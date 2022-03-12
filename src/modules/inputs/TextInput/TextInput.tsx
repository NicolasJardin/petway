import { TextField, TextFieldProps } from '@mui/material'

const TextInput = (props: TextFieldProps) => {
  return <TextField variant="outlined" {...props}></TextField>
}

export default TextInput
