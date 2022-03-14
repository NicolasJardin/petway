import { styled } from '@mui/material'

export const MainContainer = styled('div', { name: 'MainContainer' })(({ theme }) => ({
  marginLeft: 240,
  padding: 30,
  backgroundColor: theme.palette.background.default,
  height: '100vh'
}))
