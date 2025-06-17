import React from 'react'
import { useForm } from 'react-hook-form'

function LoginForm({origin = 'signIn'}) {
    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    })


  return (
    <div>
        
    </div>
  )
}

export default LoginForm
