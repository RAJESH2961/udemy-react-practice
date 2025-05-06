import { useState } from 'react';
import { styled } from 'styled-components'

// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `

import Button from './Button.jsx';
import Input from './Input.jsx';
// const Button = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;

//   &:hover{
//     background-color: #f0920e;
// }
// `

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className='flex flex-col gap-2 mb-6'>
          <Input
            label="Email"
            type="email"
            invalid={emailNotValid}
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
            // }}
            // className={emailNotValid ? 'invalid' : undefined}//If it is true the class name will be invalid else undefined
            // className={emailNotValid && 'invalid'} //if it is false it returns false so it is not a good practice but it works gives erroe in browser
            onChange={(event) => handleInputChange('email', event.target.value)}
          />

          <Input
          label="password"
            type="password"
            invalid={passwordNotValid}
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
      </div>
      <div className="flex justify-end gap-4 ">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button className='button' onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
