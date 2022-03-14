import { List, Drawer, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import { ReactNode } from 'react'
import Person from '@mui/icons-material/Person'
import { ItemContainer, TopContainer, ItemHovered } from './Styles'
import { Link } from 'react-router-dom'

type SidebarProps = {
  user: {
    avatar?: string
    name: string
  }
  items: {
    icon: JSX.Element
    label: ReactNode
    route: string
  }[]
}

const Sidebar = ({ user, items }: SidebarProps) => {
  return (
    <Drawer
      sx={{
        width: 240,
        '& .MuiDrawer-paper': {
          width: 240,
          backgroundColor: 'aqua',
          borderRight: 1,
          borderColor: 'primary.main'
        }
      }}
      variant="permanent"
      anchor="left"
    >
      <List
        sx={{
          padding: 0,
          margin: 0
        }}
      >
        <TopContainer>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                {user.avatar ? <img alt="user avatar" src={user.avatar} /> : <Person />}
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary={user.name} />
          </ListItem>
        </TopContainer>

        {items.map(({ icon, label, route }) => (
          <ItemContainer key={route}>
            <ItemHovered>
              <Link to={route}>
                <ListItem button>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              </Link>
            </ItemHovered>
          </ItemContainer>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
