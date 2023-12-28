import React, { ForwardedRef, forwardRef } from 'react'

type InputProps = {
  id: string
  label: string
}

type Ref = ForwardedRef<HTMLInputElement>

const Input = forwardRef(function Input(props: InputProps, ref: Ref) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} id={props.id} className='rounded-sm max-w-64 text-bg' type='text' />
    </div>
  )
})

export default Input
