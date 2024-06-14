import { Box } from '@mui/material'
import React from 'react'
import Textfield from './forms/Textfield'
import Passwordfield from './forms/Passwordfield'
import LoginButton from './forms/LoginButton'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosInstance from './AxiosInstance';

const Signup = () => {
  const navigate = useNavigate()
  const {handleSubmit,control} = useForm()

  const submission = (data) =>{
    AxiosInstance.post(
      `users/signup/`,
      {
        email: data.email,
        phone: data.phone,
        password: data.password
      })
      .then(()=>{
        navigate(`/`)
      })
  }

  return (
    <div className='loginBackground'>

      <form onSubmit={handleSubmit(submission)}>

      <Box className='loginBox'>
        <Box className="signupBox">
          <Box className='loginTitle'>Signup</Box>
        </Box>
        <Box className="signupBox">
          <Textfield label={"Email"} name={"email"} control={control} ></Textfield>
        </Box>
        <Box className="signupBox">
          <Textfield label={"Phone"} name={"phone"} control={control} ></Textfield>
        </Box>
        <Box className="signupBox">
          <Passwordfield label={"Password"} name={"password"} control={control} ></Passwordfield>
        </Box>
        <Box className="signupBox">
          <Passwordfield label={"Confirm Password"} name={"password2"} control={control} ></Passwordfield>
        </Box>
        <Box className="signupBox">
          <LoginButton label={"Signup"} type={"submit"} ></LoginButton>
        </Box>
        <Box className="signupBox">
          <Link to="/" > Already an account? Login now! </Link>
        </Box>
      </Box>

      </form>

    </div>
  )
}

export default Signup