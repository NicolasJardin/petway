import TextInput from 'modules/inputs/TextInput/TextInput'
import Google from '@mui/icons-material/Google'
import ButtonContained from 'modules/inputs/ButtonContained/'
import { Typography, Paper } from '@mui/material'
import backgroundImage from 'assets/images/background.jpg'
import Pets from '@mui/icons-material/Pets'
import {
  Container,
  LeftContent,
  RightContent,
  MainContainer,
  InputContent,
  ButtonContent,
  Title
} from './Styles'

const Login = () => {
  return (
    <Container>
      <LeftContent>
        <Paper
          style={{
            backgroundImage: `url(${backgroundImage})`,
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%'
          }}
        ></Paper>
      </LeftContent>

      <RightContent>
        <MainContainer>
          <Title>
            <Typography variant="h3">Petway</Typography>
            <Pets />
          </Title>

          <InputContent>
            <TextInput label="Digite o seu e-mail" />
          </InputContent>

          <InputContent>
            <TextInput label="Digite a sua senha" />
          </InputContent>

          <ButtonContained color="secondary">
            <ButtonContent>
              <Typography variant="button">Logar com o google</Typography>
              <Google color="success" />
            </ButtonContent>
          </ButtonContained>
        </MainContainer>
      </RightContent>
    </Container>
  )
}

export default Login
