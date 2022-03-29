import { TextareaAutosize, styled } from '@mui/material'

const TextArea = styled(TextareaAutosize, { name: 'TextArea' })(({ theme }) => ({
  padding: 20,
  borderColor: theme.palette.grey[500],
  borderRadius: 3,
  resize: 'vertical',

  '&:hover': {
    borderColor: theme.palette.common.black
  },

  '&:focus': {
    borderColor: theme.palette.primary.dark,
    outline: theme.palette.primary.dark
  }
}))

export default TextArea
