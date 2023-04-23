import { useState } from 'react'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Textarea from '@mui/joy/Textarea'
import axios from 'axios'
import NavBar from './components/inc/Navbar'
import { Grid } from '@mui/material'

export default function Secondpage() {
  const [inputStr, setcode] = useState(``)

  const handleSubmit = () => {
    const codeStr = inputStr
      .replace(/\n/g, '\\n')
      .replace(/\t/g, '\\t')
      .replace(/;/g, '')

    console.log(codeStr)
    // TODO Send the input as hidden tests and recieve the output by output api
    // Language selection dropdown
    axios
      .post(
        'https://codejudge.geeksforgeeks.org/submit-request',
        {
          language: 'c',
          code: codeStr,
          input: '',
          save: false,
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
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div
      style={{ backgroundColor: '#498EC5', width: '100vw', minHeight: '100vh' }}
    >
      <NavBar />
      <Grid container columns={{ xs: 2, md: 12 }}>
        <Grid item xs={6} style={{ backgroundColor: 'black' }}>
          <p style={{ color: 'white', fontSize: '20px', margin: '10%' }}>
            <big style={{ margin: '5px' }}>
              Minimum Insertion Steps to Make a String Palindrome
            </big>
            Given a string s. In one step you can insert any character at any
            index of the string. Return the minimum number of steps to make s
            palindrome. A Palindrome String is one that reads the same backward
            as well as forward.
          </p>
        </Grid>
        <Grid item xs={6} style={{ padding: '5px' }}>
          <Textarea
            placeholder='Write your code Here…'
            minRows={25}
            endDecorator={
              <Box
                sx={{
                  display: 'flex',
                  gap: 'var(--Textarea-paddingBlock)',
                  pt: 'var(--Textarea-paddingBlock)',
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  flex: 'auto',
                }}
              >
                <Button onClick={handleSubmit} sx={{ ml: 'auto' }}>
                  Submit
                </Button>
              </Box>
            }
            sx={{
              minWidth: 300,
            }}
            style={{ backgroundColor: '#000030', color: 'white' }}
            onChange={(e) => {
              setcode(e.target.value)
            }}
          />
        </Grid>
      </Grid>
      <div>
        <script
          src='https://ideone.com/e.js/8PcAfT'
          type='text/javascript'
        ></script>
      </div>
    </div>
  )
}
