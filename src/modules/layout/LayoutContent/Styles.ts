import { styled } from '@mui/material'

export const MainContainer = styled('div', { name: 'MainContainer' })(({ theme }) => ({
  marginLeft: 240,
  padding: 30,
  backgroundColor: theme.palette.grey[300],
  minHeight: '100vh',
  height: '100%'
}))

export const TitleContainer = styled('div', { name: 'TitleContainer' })(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 20
}))
