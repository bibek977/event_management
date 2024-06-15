import { Box } from '@mui/material'
import React from 'react'
import Textfield from './forms/Textfield'
import Passwordfield from './forms/Passwordfield'
import LoginButton from './forms/LoginButton'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosInstance from './AxiosInstance';

const Login = () => {
  const navigate = useNavigate()
  const {handleSubmit,control} = useForm({
    defaultValues: {
      email: '', 
      password: '' 
    }
  })

  const submission = (data) =>{
    AxiosInstance.post(
      `users/login/`,
      {
        email: data.email,
        password: data.password
      })
      .then((response)=>{
        localStorage.setItem("Token",response.data.token)
        localStorage.setItem("User",response.data.user.email)
        navigate(`/home`)
      })
      .catch((error)=>{
        console.error("Error while login : ", error)
      })
  }
  return (
    <div className='loginBackground'>
      <form onSubmit={handleSubmit(submission)}>
      <Box className='loginBox'>
        <Box className="itemBox">
          <Box className='loginTitle'>Login</Box>
        </Box>
        <Box className="itemBox">
          <Textfield label={"Email"} name={"email"} control={control} ></Textfield>
        </Box>
        <Box className="itemBox">
          <Passwordfield label={"Password"} name={"password"} control={control} ></Passwordfield>
        </Box>
        <Box className="itemBox">
          <LoginButton label={"Login"} type={"submit"}></LoginButton>
        </Box>
        <Box className="itemBox">
          <Link to="/signup" > No account yet? Signup now! </Link>
        </Box>
      </Box>
      </form>
    </div>
  )
}

export default Login