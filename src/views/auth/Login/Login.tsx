import { Container, LeftContent, RightContent, InputsContainer, InputContent } from './Styles'
import TextInput from 'modules/inputs/TextInput/TextInput'
import Google from '@mui/icons-material/Google'
import ButtonContained from 'modules/inputs/ButtonContained/'
import { Typography, Paper } from '@mui/material'
import backgroundImage from 'assets/images/background.jpg'
import { Image } from '@mui/icons-material'

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
        <InputsContainer>
          <Typography variant="h3">Petway</Typography>

          <InputContent>
            <TextInput label="Digite o seu e-mail" />
          </InputContent>

          <InputContent>
            <TextInput label="Digite a sua senha" />
          </InputContent>

          <ButtonContained color="secondary">
            <Typography variant="button">Logar com o google</Typography>
            <Google color="success" />
          </ButtonContained>
        </InputsContainer>
      </RightContent>
    </Container>
  )
}

export default Login
