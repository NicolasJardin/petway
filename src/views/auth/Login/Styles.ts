import { styled } from '@mui/material'

export const Container = styled('div', { name: 'Container' })({
  width: '100vw',
  height: '100vh',
  display: 'flex'
})

export const LeftContent = styled('div', { name: 'LeftContent' })(({ theme }) => ({
  width: '52%'
}))

export const RightContent = styled('div', { name: 'RightContent' })(({ theme }) => ({
  width: '48%',
  backgroundColor: theme.palette.grey[200],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const InputsContainer = styled('div', { name: 'InputsContainer' })({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  alignItems: 'center'
})

export const InputContent = styled('div', { name: 'InputContent' })({
  '> div': {
    minWidth: 300
  }
})
