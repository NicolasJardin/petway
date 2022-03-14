import { styled, ListItem } from '@mui/material'

export const ItemContainer = styled(ListItem, { name: 'ItemContainer' })({
  padding: 30
})

export const TopContainer = styled('div', { name: 'TopContainer' })(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  width: '100%'
}))

export const ItemHovered = styled('div', { name: 'ItemHovered' })(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  '> a': {
    width: '100%',
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  '&:hover': {
    '.MuiSvgIcon-root, .MuiTypography-root': {
      color: theme.palette.primary.main
    }
  }
}))
