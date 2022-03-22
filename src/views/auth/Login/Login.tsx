import Google from '@mui/icons-material/Google'
import Pets from '@mui/icons-material/Pets'
import { Paper, Typography } from '@mui/material'
import backgroundImage from 'assets/images/background.jpg'
import { useAuth } from 'contexts/AuthContext/useAuth'
import ButtonContained from 'modules/inputs/ButtonContained/'
import TextInput from 'modules/inputs/TextInput/TextInput'
import { useCallback } from 'react'
import {
  ButtonContent,
  Container,
  InputContent,
  LeftContent,
  MainContainer,
  RightContent,
  Title
} from './Styles'
import { useNavigate } from 'react-router-dom'
import { petRoute } from 'routes/petRoute'

const Login = () => {
  const { signInWithGoogle, user } = useAuth()

  const navigate = useNavigate()

  const handleLoginWithGoogle = useCallback(async () => {
    if (!user) {
      await signInWithGoogle()
    }

    navigate(petRoute.items.adoption.path)
  }, [user, signInWithGoogle])

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
            <ButtonContent onClick={() => handleLoginWithGoogle()}>
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
