import { CardContent, Card } from '@mui/material'
import LayoutContent from 'modules/layout/LayoutContent'
import { getDatabase, push, ref, set } from 'firebase/database'
import { useCallback } from 'react'
import { Pet } from 'types/Pet'
import { useAuth } from 'contexts/AuthContext/useAuth'

const Donation = () => {
  const database = getDatabase()
  const petsRef = ref(database, 'pets')
  const newPetRef = push(petsRef)

  const { user } = useAuth()

  const petPayload: Pet = {
    age: 2,
    species: 'Cachorro',
    description: 'Blablabla',
    race: 'Beagle',
    user: user!
  }

  const handleDonatePet = useCallback(() => {
    set(newPetRef, petPayload)
  }, [])

  return (
    <LayoutContent title="Faça sua doação">
      <Card>
        <CardContent>
          <button onClick={handleDonatePet}>Teste</button>
        </CardContent>
      </Card>
    </LayoutContent>
  )
}

export default Donation
