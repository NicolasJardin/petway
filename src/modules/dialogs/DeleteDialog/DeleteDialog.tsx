import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Button
} from '@mui/material'

type DeleteDialogProps = Omit<DialogProps, 'children'> & {
  onConfirm: () => void
  handleClose: () => void
  title: string
  description: string
}

const DeleteDialog = ({
  onConfirm,
  handleClose,
  title,
  description,
  ...props
}: DeleteDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={onConfirm} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog
