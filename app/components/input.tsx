import React from 'react'
import { Plus } from './icons'

export default function Input() {
  return (
    <div>
      <input type='text' />
      <button>
        <Plus size={24} color='currentColor' />{' '}
      </button>
    </div>
  )
}
