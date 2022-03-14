import Sidebar from '../Sidebar/Sidebar'
import Pets from '@mui/icons-material/Pets'
import { Fragment } from 'react'
import { MainContainer } from './Styles'
import { petRoute } from 'routes/petRoute'

const LayoutContent = () => {
  return (
    <Fragment>
      <Sidebar
        user={{
          name: 'Geoswaldo Jubileu Pereira'
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
        <div>batata</div>
      </MainContainer>
    </Fragment>
  )
}

export default LayoutContent
