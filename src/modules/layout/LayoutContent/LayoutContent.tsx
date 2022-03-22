import Sidebar from '../Sidebar/Sidebar'
import Pets from '@mui/icons-material/Pets'
import { ComponentType, Fragment } from 'react'
import { MainContainer, TitleContainer } from './Styles'
import { petRoute } from 'routes/petRoute'
import { useAuth } from 'contexts/AuthContext/useAuth'
import { Typography } from '@mui/material'

type LayoutContentProps = {
  title: string
}

const LayoutContent: ComponentType<LayoutContentProps> = ({ children, title }) => {
  const { user } = useAuth()

  return (
    <Fragment>
      <Sidebar
        user={{
          name: user?.name,
          avatar: user?.avatar
        }}
        items={[
          {
            label: 'Adotar',
            route: petRoute.items.adoption.path,
            icon: <Pets />
          },
          {
            label: 'Doar',
            route: petRoute.items.donation.path,
            icon: <Pets />
          },
          {
            label: 'Informações',
            route: petRoute.items.info.path,
            icon: <Pets />
          },
          {
            label: 'Pet Shop',
            route: petRoute.items.shop.path,
            icon: <Pets />
          },
          {
            label: 'Sobre nós',
            route: petRoute.items.about.path,
            icon: <Pets />
          }
        ]}
      />
      <MainContainer>
        <TitleContainer>
          <Typography variant="h3">{title}</Typography>
        </TitleContainer>
        {children}
      </MainContainer>
    </Fragment>
  )
}

export default LayoutContent
