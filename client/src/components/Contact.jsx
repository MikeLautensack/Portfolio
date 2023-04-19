import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import './css/styles.css'
import emailjs from '@emailjs/browser'
import { useRef, useEffect } from 'react'

const Contact = () => {

  const form = useRef()

  const validateContactMessage = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Please enter a valid email'),
    message: Yup.string().required('Message is required') 
  })

  const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm({
    resolver: yupResolver(validateContactMessage)
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setTimeout(() => {
        reset({
          name: '',
          email: '',
          message: ''
        });
      }, '3000')
    }
  }, [formState])

  const submit = (data) => {
    console.log(data)
    emailjs.sendForm('service_vpivc9s', 'template_aw7hz7x', form.current, 'eQ0JB0L5SEmkHld65')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
  }

  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form ref={form} onSubmit={handleSubmit(submit)} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#15F777] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Add a message</p>
            </div>
            <input {...register("name")} className='inputs bg-[#ccd6f6] p-2' placeholder='Name'/>  
            {errors.name && <p style={{ color: '#C70000'}}>{errors.name?.message}</p>}      
            <input {...register("email")} className='inputs p-2 my-3 bg-[#ccd6f6]' placeholder='Email'/>
            {errors.email && <p style={{ color: '#C70000'}}>{errors.email?.message}</p>} 
            <textarea {...register("message")} className='inputs bg-[#ccd6f6] p-2'rows='10' placeholder='Message'></textarea>
            {errors.message && <p style={{ color: '#C70000'}}>{errors.message?.message}</p>}
            {formState.isSubmitSuccessful && <p style={{ color: '#15F777'}}>Your message was successfully sent!</p>}
            <button className='text-white border-2 hover:bg-[#15F777] hover:border-[#15F777] hover:text-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center'>Contact Me!</button>       
        </form>
    </div>
  )
}

export default Contact