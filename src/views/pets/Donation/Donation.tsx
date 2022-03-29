import { Card, CardContent, Typography } from '@mui/material'
import { useAuth } from 'contexts/AuthContext/useAuth'
import { getDatabase, push, ref, set, update } from 'firebase/database'
import ButtonContained from 'modules/inputs/ButtonContained'
import TextArea from 'modules/inputs/TextArea/TextArea'
import TextInput from 'modules/inputs/TextInput/TextInput'
import LayoutContent from 'modules/layout/LayoutContent'
import FormLabel from 'modules/presentational/FormLabel'
import { useCallback, useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import { petRoute } from 'routes/petRoute'
import { Pet } from 'types/Pet'
import { ButtonContainer, FormContainer, InputsContainer } from './Styles'

type StateProps = {
  pet?: Pet
}

const Donation = () => {
  const database = getDatabase()
  const petsRef = ref(database, 'pets')
  const newPetRef = push(petsRef)

  const { state } = useLocation()

  const pet = useMemo(() => {
    if (state) return (state as StateProps).pet
  }, [state])

  console.log({ state, pet })

  const [species, setSpecies] = useState<string>(pet?.species || '')
  const [race, setRace] = useState<string>(pet?.race || '')
  const [description, setDescription] = useState<string>(pet?.description || '')
  const [age, setAge] = useState<number>(pet?.age || 0)

  const { user } = useAuth()

  const navigate = useNavigate()

  const petPayload = useMemo<Partial<Pet>>(
    () => ({
      age,
      species,
      race,
      description,
      user
    }),
    [age, species, race, description, user]
  )

  const handleDonatePet = useCallback(async () => {
    try {
      if (!state) {
        await set(newPetRef, petPayload)

        toast.success('Doação registrada com sucesso!')
        navigate(petRoute.items.adoption.path)

        return
      }

      const updates = {} as any
      updates['/pets/' + pet?.id] = petPayload

      update(ref(database), updates)

      toast.success('Doação alterada com sucesso!')

      navigate(petRoute.items.adoption.path)
    } catch (e) {}
  }, [navigate, newPetRef, petPayload, database, pet, state])

  useEffect(() => {
    if (!state) {
      setAge(0)
      setDescription('')
      setRace('')
      setSpecies('')
    }
  }, [state])

  return (
    <LayoutContent title={state ? 'Altere sua doação' : 'Registre sua doação'}>
      <Card>
        <CardContent>
          <Typography variant="h4">Informações de seu pet</Typography>

          <FormContainer>
            <InputsContainer>
              <FormLabel text="Espécie">
                <TextInput
                  placeholder="Digite a espécie de seu pet"
                  value={species}
                  onChange={e => setSpecies(e.target.value)}
                />
              </FormLabel>

              <FormLabel text="Raça">
                <TextInput
                  placeholder="Digite a raça de seu pet"
                  value={race}
                  onChange={e => setRace(e.target.value)}
                />
              </FormLabel>

              <FormLabel text="Idade">
                <TextInput
                  type="number"
                  placeholder="Digite a idade em anos de seu pet"
                  value={age}
                  onChange={({ target: { value } }) => setAge(Number(value))}
                />
              </FormLabel>
            </InputsContainer>

            <TextArea
              minRows={5}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <ButtonContainer>
              <ButtonContained color="success" onClick={handleDonatePet}>
                {state ? 'Salvar' : 'Doar'}
              </ButtonContained>
            </ButtonContainer>
          </FormContainer>
        </CardContent>
      </Card>
    </LayoutContent>
  )
}

export default Donation
