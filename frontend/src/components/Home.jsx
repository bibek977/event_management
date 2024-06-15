import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CreateModal from './CreateModal';
import EditModal from './EditModal';
import AxiosInstance from './AxiosInstance';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const navigate = useNavigate()
  const [initData,setData] = useState({}) 

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [editOpen, setEditOpen] = useState(false);
  const handleEdit = (e) => {
    setData(e)
    setEditOpen(true)
  };
  const handleCloseEdit = () => setEditOpen(false);

  const [getEvent,setEvent]=useState([])

  const getData = ()=>{
    AxiosInstance.get(`api/`)
    .then((res)=>{
      setEvent(res.data.data)
    })
    }


  const handleDelete = (e)=>{
    AxiosInstance.delete(`api/${e.id}`)
    .then((res)=>{
      navigate(`/home`)
    })
    }
    useEffect(()=>{
      getData()
    },[handleDelete])

      
  return (
    <div>
      <Box>
        <Box sx={{display:'flex',justifyContent:'space-between',paddingBottom:'2rem'}}>
          <Typography variant='h4'>
            Events List
          </Typography>
          <Button variant="contained" color='success' onClick={handleOpen}>Create</Button>
        </Box>
        {
          getEvent ?

          getEvent.map((e,i)=>(

      <Accordion key={i}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant='h6'>
            {e.title}
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <b><i>{e.date}</i></b> : : <b><i>{e.end}</i></b>
        </AccordionDetails>

        <AccordionDetails>
          {e.description}
        </AccordionDetails>

        <AccordionDetails>
          <b>created_by : <i> {e.created_by}</i></b>
        </AccordionDetails>

        <AccordionDetails sx={{display:'flex',justifyContent:"space-between"}}> 
          <Button variant="contained" color='success' onClick={() => handleEdit(e)} >Edit</Button>
          <Button variant="contained" onClick={() => handleDelete(e)} color='primary'>Delete</Button>
        </AccordionDetails>

      </Accordion>
                  
                ))
      :
      ""
              }


      </Box>
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateModal setOpen={setOpen}></CreateModal>
        </Box>
      </Modal>
    </div>
      <div>
      <Modal
        open={editOpen}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditModal setEditOpen={setEditOpen} initData={initData}></EditModal>
        </Box>
      </Modal>
    </div>
    </div>
  );
}
