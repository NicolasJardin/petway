import { styled } from '@mui/material'

export const TitleContainer = styled('div', { name: 'TitleContainer' })({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  justifyContent: 'center'
})

export const InfoContainer = styled('div', { name: 'InfoContainer' })({
  display: 'flex',
  flexDirection: 'column',
  gap: 20
})

export const TextContainer = styled('div', { name: 'TextContainer' })({
  maxWidth: 450
})
