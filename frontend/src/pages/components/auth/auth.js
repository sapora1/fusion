import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Chip } from '@mui/material'
import axios from 'axios'

export default function Auth(props) {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  let [authMode, setAuthMode] = useState('signin')
  const router = useRouter()

  const login = () => {
    console.log(email)
    axios
      .post(
        'http://localhost:8000/api/signin',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data.result.email)

        console.log(response.data)

        if (response.data.length === 0) {
          alert('Wrong Credentials')
        } else {
          console.log('Login Successful')
          localStorage.setItem('email', response.data.result.email)
          localStorage.setItem('name', response.data.result.name)
          router.push('/Main')
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          alert('Wrong Credentials')
        } else {
          console.error(error)
          alert('An error occurred while logging in.')
        }
      })
  }

  const signup = () => {
    axios
      .post(
        'http://localhost:8000/api/signup',
        {
          name: name,
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data[0])

        console.log(response.data)
        if (response.data.length === 0) {
          alert('Something Went Wrong!')
        } else {
          alert('Signup Successful')
          setemail('')
          setpassword('')
          changeAuthMode()
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          alert('Something Went Wrong!')
        } else {
          console.error(error)
          alert('An error occurred while signing up.')
        }
      })
  }
  const changeAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin')
  }

  if (authMode === 'signin') {
    return (
      <div className='Auth-form-container'>
        <form className='Auth-form'>
          <div className='Auth-form-content'>
            <Chip
              style={{
                margin: 'auto',
                fontSize: '30px',
                padding: '10px',
                color: '#B6D1DE',
                height: '100%',
                width: '100%',
                backgroundColor: '#000030',
              }}
              label='</> FUSION'
            />
            <div className='text-center'>
              Not registered yet?{' '}
              <span className='link-primary' onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className='form-group mt-3'>
              <label>Email address</label>
              <input
                type='email'
                className='form-control mt-1'
                placeholder='Enter email'
                onChange={(e) => {
                  setemail(e.target.value)
                }}
              />
            </div>
            <div className='form-group mt-3'>
              <label>Password</label>
              <input
                type='password'
                className='form-control mt-1'
                placeholder='Enter password'
                onChange={(e) => {
                  setpassword(e.target.value)
                }}
              />
            </div>
            <div className='d-grid gap-2 mt-3'>
              <button type='button' onClick={login} className='btn btn-primary'>
                SignIn
              </button>
            </div>
            <p className='text-center mt-2'>
              Forgot <a href='#'>password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className='Auth-form-container'>
      <form className='Auth-form'>
        <div className='Auth-form-content'>
          <Chip
            style={{
              margin: 'auto',
              fontSize: '30px',
              color: 'white',
              height: '100%',
              width: '100%',
              backgroundColor: '#000030',
            }}
            label='</> FUSION'
          />
          <div className='text-center'>
            Already registered?{' '}
            <span className='link-primary' onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className='form-group mt-3'>
            <label>Full Name</label>
            <input
              type='text'
              className='form-control mt-1'
              placeholder='e.g Jane Doe'
              onChange={(e) => {
                setname(e.target.value)
              }}
            />
          </div>
          <div className='form-group mt-3'>
            <label>Email address</label>
            <input
              type='email'
              className='form-control mt-1'
              placeholder='Email Address'
              onChange={(e) => {
                setemail(e.target.value)
              }}
            />
          </div>
          <div className='form-group mt-3'>
            <label>Password</label>
            <input
              type='password'
              className='form-control mt-1'
              placeholder='Password'
              onChange={(e) => {
                setpassword(e.target.value)
              }}
            />
          </div>
          <div className='d-grid gap-2 mt-3'>
            <button type='button' className='btn btn-primary' onClick={signup}>
              SignUp
            </button>
          </div>
          <p className='text-center mt-2'>
            Forgot <a href='#'>password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
