import React from 'react'
import { cn } from '../utils'

type Data = {
  empty: boolean
  content: string
}

type PreviewProps = {
  data: Data
}

export default function Preview(props: PreviewProps) {
  const { empty, content } = props.data
  const ifEmpty = 'CSV will appear here '
  return <div className={cn('mt-4 flex text-bg p-2 rounded-md max-w-[700px] overflow-x-scroll', empty ? 'bg-fg40' : 'bg-fg')}>{empty ? ifEmpty : content}</div>
}
