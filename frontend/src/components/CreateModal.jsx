import { Box } from '@mui/material'
import React from 'react'
import Textfield from './forms/Textfield'
import Passwordfield from './forms/Passwordfield'
import LoginButton from './forms/LoginButton'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosInstance from './AxiosInstance';

const CreateModal = (props) => {
  const {setOpen} = props
  const navigate = useNavigate()
  const {handleSubmit,control} = useForm()

  const user = localStorage.getItem("User")

  const submission = (data) =>{
    AxiosInstance.post(
      `api/`,
      {
        title: data.title,
        date: data.date,
        end: data.end,
        description: data.description,
        participants: data.participants,
        created_by: user
      })
      .then(()=>{
        // navigate(`/`)
        setOpen(false)
      })
  }

  return (
    <div className='loginBackground'>

      <form onSubmit={handleSubmit(submission)}>

      <Box className='loginBox'>
        <Box className="signupBox">
          <Box className='loginTitle'>Create Event</Box>
        </Box>
        <Box className="signupBox">
          <Textfield label={"Title"} name={"title"} control={control} ></Textfield>
        </Box>
        <Box className="signupBox">
          <Textfield label={"Start Date"} name={"date"} control={control} ></Textfield>
        </Box>
        <Box className="signupBox">
          <Textfield label={"End Date"} name={"end"} control={control} ></Textfield>
        </Box>
        <Box className="signupBox">
          <Textfield label={"Description"} name={"description"} control={control} ></Textfield>
        </Box>
        <Box className="signupBox">
          <Textfield label={"Participants"} name={"participants"} control={control} ></Textfield>
        </Box>
        <Box className="signupBox">
          <LoginButton label={"Create"} type={"submit"} ></LoginButton>
        </Box>
      </Box>

      </form>

    </div>
  )
}

export default CreateModal