import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #dbdbdb',
  borderRadius: '5%',
  boxShadow: 20,
  p: 4,
  textAlign: 'center',
  padding: '35px'
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div onLoad={handleOpen}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Você precisa fazer login para acessar essa página.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button><a href='/login'>Fazer Login</a></Button>
            <Button><a href='/login'>Criar conta</a></Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}