import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import cookie from 'js-cookie'
import {useState} from 'react'
export function Login(props){
  const [err,setErr]=useState('')
  const onSubmit=()=>{
    axios.post('/user/login',{email:document.getElementById('Email').value, password:document.getElementById('Password').value}).then(res=>{
      cookie.set("user",res.data.user.email)
      props.history.push('/upload')
    }).catch(err=>{
      setErr("Invalid username or password")
    })
  }

        return <div> 
        <div className="App"> 
        <form className="form">
            Login
            <span id='error'>{err}</span>
            <TextField type='text' onChange={()=>setErr('')}
            placeholder='Email'
            labelText="Email"
            id="Email"
            formControlProps={{
              fullWidth: true
            }}
            type="Email" />
          <TextField
            placeholder='Password' onChange={()=>setErr('')}
            labelText="Password"
            id="Password"
            formControlProps={{
              fullWidth: true
            }}
            type="password"
          />
          <Button type="button" onClick={()=>onSubmit()} color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
      </div></div>
}