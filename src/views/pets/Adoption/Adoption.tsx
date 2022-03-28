import { Comment, Delete } from '@mui/icons-material'
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'
import { useAuth } from 'contexts/AuthContext/useAuth'
import { DatabaseReference, getDatabase, off, onValue, ref, remove } from 'firebase/database'
import DeleteDialog from 'modules/dialogs/DeleteDialog/DeleteDialog'
import LayoutContent from 'modules/layout/LayoutContent'
import { Fragment, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Pet } from 'types/Pet'

const Adoption = () => {
  const database = getDatabase()
  const navigate = useNavigate()
  const [pets, setPets] = useState<Pet[]>([])
  const [dialog, setDialog] = useState<{ open: boolean; petRef?: DatabaseReference }>({
    open: false
  })

  const { user } = useAuth()

  const openDialog = useCallback((petRef: DatabaseReference) => {
    setDialog({
      open: true,
      petRef
    })
  }, [])

  const handleDelete = useCallback(
    async (petRef?: DatabaseReference) => {
      if (petRef) {
        try {
          await remove(petRef)
          setDialog({ ...dialog, open: false })
          toast.success('Doação cancelada com sucesso.')
        } catch (e) {
          toast.error('Falha ao cancelar doação')
        }
      }
    },
    [dialog]
  )

  type FirebasePets = Record<
    string,
    {
      description?: string
      species: string
      age: number
      race?: string
      user: {
        id: string
        name: string
        avatar?: string
      }
    }
  >

  useEffect(() => {
    if (!user) return navigate('/auth/login')
  }, [user, navigate])

  useEffect(() => {
    const petsRef = ref(database, `pets`)

    onValue(petsRef, data => {
      const pets: FirebasePets = data.val()
      console.log({ pets })

      const parsedPets: Pet[] = Object.entries(pets).map(([key, value]) => {
        return {
          user: value.user,
          id: key,
          age: value.age,
          description: value.description,
          species: value.species,
          race: value.race
        }
      })

      setPets(parsedPets)
    })

    return () => off(petsRef, 'value')
  }, [database])

  return (
    <Fragment>
      <DeleteDialog
        title="Você deseja cancelar sua doação?"
        description="Sua ação não poderá ser desfeita e quaisquer negociações serão canceladas"
        handleClose={() => setDialog({ ...dialog, open: false })}
        onConfirm={() => handleDelete(dialog.petRef)}
        open={dialog.open}
      />
      <LayoutContent title="Adotar">
        <Card>
          <CardContent>
            <List>
              {pets?.map(pet => {
                const petRef = ref(database, `pets/${pet.id}`)

                return (
                  <Fragment key={pet.id}>
                    <ListItem
                      alignItems="flex-start"
                      secondaryAction={
                        <Fragment>
                          <IconButton edge="end" aria-label="comments">
                            <Comment />
                          </IconButton>
                          {user?.id === pet.user.id && (
                            <IconButton
                              edge="end"
                              aria-label="comments"
                              onClick={() => openDialog(petRef)}
                            >
                              <Delete />
                            </IconButton>
                          )}
                        </Fragment>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar alt="" src={pet.user.avatar} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={pet.species}
                        secondary={
                          <Fragment>
                            <Typography variant="body2" color="text.primary" component="span">
                              {`${pet.race ? `${pet.race} - ` : ''} ${pet.age} ${
                                pet.age === 0 || pet.age > 1 ? 'anos' : 'ano'
                              }`}
                            </Typography>

                            <Typography
                              variant="body2"
                              color="text.secondary"
                              component="span"
                              sx={{ display: 'block' }}
                            >
                              {pet.description}
                            </Typography>
                          </Fragment>
                        }
                      />
                      <ListItemText />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </Fragment>
                )
              })}
            </List>
          </CardContent>
        </Card>
      </LayoutContent>
    </Fragment>
  )
}

export default Adoption
