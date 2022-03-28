import { Card, CardContent, Typography } from '@mui/material'
import LayoutContent from 'modules/layout/LayoutContent'
import { TitleContainer } from './Styles'

const Shop = () => {
  return (
    <LayoutContent title="Pet Shop">
      <Card>
        <CardContent>
          <TitleContainer>
            <Typography variant="h6">
              Ops, essa pagina ainda está sendo desenvolvida, volte novamente mais tarde :)
            </Typography>
          </TitleContainer>
        </CardContent>
      </Card>
    </LayoutContent>
  )
}

export default Shop
