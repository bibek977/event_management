import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Controller } from "react-hook-form";

export default function Textfield(props) {
    const {label,name,control} = props
  return (

    <Controller
      name= {name}
      control={control}
      render={({
        field : {onChange,value},
        fieldState : {error},
        formState,
      }) => (
        <TextField 
        id="outlined-basic" 
        onChange={onChange}
        value={value}
        label={label}
        variant="outlined" 
        className='loginInput'
        error = {!!error}
        helperText = {error?.message}
        />
      )
    }
    >

    </Controller>

  );
}
