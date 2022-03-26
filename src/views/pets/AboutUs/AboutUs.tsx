import { Facebook, Instagram } from '@mui/icons-material'
import { Card, CardContent, Link, Typography } from '@mui/material'
import LayoutContent from 'modules/layout/LayoutContent'
import { InfoContainer, TextContainer, TitleContainer } from './Styles'

const AboutUs = () => {
  return (
    <LayoutContent title="Sobre nós">
      <Card>
        <CardContent>
          <TitleContainer>
            <Typography color="primary.main" variant="h4">
              Pet Way
            </Typography>
          </TitleContainer>

          <InfoContainer>
            <div>
              <Typography variant="h6">Objetivo</Typography>
              <TextContainer>
                <Typography variant="body1">
                  A Petway tem como objetivo incentivar a adoção e facilitar este processo, todos os
                  nossos esforços tem como foco melhorar a qualidade de vida dos nossos "bichanos"
                </Typography>
              </TextContainer>
            </div>

            <div>
              <Typography variant="h6">Equipe</Typography>
              <Typography variant="body1">Desenvolvedor: Nicolas Jardin dos Santos</Typography>
            </div>

            <div>
              <Typography variant="h6">Informações de contato</Typography>
              <Typography variant="body1">Telefone: 51 99323-3930</Typography>
              <Typography variant="body1">Email: petway@petway.com.br</Typography>
            </div>
            <div>
              <Typography variant="h6">Redes Sociais</Typography>

              <Link href="https://pt-br.facebook.com/" target="_blank" rel="noopener">
                <Facebook />
              </Link>

              <Link href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener">
                <Instagram />
              </Link>
            </div>
          </InfoContainer>
        </CardContent>
      </Card>
    </LayoutContent>
  )
}

export default AboutUs
