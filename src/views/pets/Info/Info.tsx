import { Card, CardContent, Typography } from '@mui/material'
import LayoutContent from 'modules/layout/LayoutContent'
import { InfoContainer } from './Styles'

const Info = () => {
  return (
    <LayoutContent title="Informações">
      <InfoContainer>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6">
              Abandono de animais
            </Typography>
            <Typography variant="body1">
              Você já deve ter se deparado com cachorros, gatos ou qualquer outro animal largado
              pelas ruas sem ter um lugar para chamar de lar, infelizmente isso ainda é algo comum
              no Brasil, pois existem cerca de 30 milhões de animais abandonados. Considerando estes
              dados, você já deve ter pensado que não ha nada que se possa fazer, mas, na verdade
              cada um pode fazer a diferença, se adotar um animal você estará salvando uma vida e
              ganhando um amigo para a vida toda, então faça a diferença agora mesmo!
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6">
              Maus-tratos
            </Typography>
            <Typography variant="body1">
              Infelizmente, milhares de animais sofrem de maus-tratos e durante a pandemia as
              denuncias sobre maus-tratos só aumentaram. Recentemente novos projetos de leis visam
              aumentar a pena para quem cometer estes atos de covardia, fato que se faz relevante
              para combater este problema, mas não esqueça que você também pode ajudar a combater
              estes criminosos, se souber de algum caso denuncie!
            </Typography>
          </CardContent>
        </Card>
      </InfoContainer>
    </LayoutContent>
  )
}

export default Info
