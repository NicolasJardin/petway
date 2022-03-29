import { styled } from '@mui/material'

export const FormContainer = styled('div', { name: 'FormContainer' })({
  marginTop: 30,
  display: 'flex',
  flexDirection: 'column',
  gap: 30
})

export const InputsContainer = styled('div', { name: 'InputsContainer' })({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '1fr 1fr',
  gap: 30
})

export const ButtonContainer = styled('div', { name: 'ButtonContainer' })({
  display: 'flex',
  justifyContent: 'flex-end'
})
