import React, { useRef, useState } from 'react'
import Input from './input'
import Button from './button'
import Preview from './preview'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { generateReport, downloadCSV, getUrlArray } from '../report'

export default function Form() {
  const nameRef = useRef<HTMLInputElement>(null)
  const tagRef = useRef<HTMLInputElement>(null)
  const [data, setData] = useState<any>({ empty: true, content: [] })
  const [copied, setCopied] = useState<boolean>(false)
  const [csvData, setCsvData] = useState<string>('')
  const [value, copy] = useCopyToClipboard()

  const handleClick = async (e: any) => {
    e.preventDefault()
    if (nameRef.current === null || tagRef.current === null) {
      return
    }
    const name = nameRef.current.value
    const tag = tagRef.current.value
    const data = await generateReport(name, tag)
    if (data !== undefined) {
      setCsvData(data)
      setData({
        empty: false,
        content: data,
      })
    } else {
      setCsvData('Error')
    }
  }

  const handleDL = (e: any) => {
    e.preventDefault()
    if (csvData !== 'Error' && tagRef.current !== null) {
      downloadCSV(csvData, tagRef.current.value)
    }
  }

  const handleCopy = (e: any) => {
    e.preventDefault()
    if (data.content !== null) {
      copy(data.content)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }

  const handleArray = async (e: any) => {
    e.preventDefault()
    if (nameRef.current !== null && tagRef.current !== null) {
      const array = await getUrlArray(nameRef.current.value, tagRef.current.value)
      if (array !== undefined) {
        setData({
          empty: false,
          content: JSON.stringify(array),
        })
      } else {
        setData({
          empty: true,
          content: [],
        })
      }
    }
  }

  return (
    <div className='max-w-[700px]'>
      <h1 className='text-2xl'>Export tagged resources from Cloudinary to CSV</h1>
      <h3 className='text-base'>Please pass your cloud name and tag name and then click on Generate Report.</h3>
      <form className='flex flex-col gap-2 mt-4'>
        <Input ref={nameRef} label='Cloud name' id='name' />
        <Input ref={tagRef} label='Tag Name' id='tag' />
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Button className='max-w-48 mt-2' onClick={(e: any) => handleClick(e)}>
              Generate Report
            </Button>
            <Button className='max-w-48 mt-2' onClick={(e: any) => handleDL(e)}>
              Download CSV
            </Button>
            <Button className='max-w-48 mt-2' onClick={(e: any) => handleArray(e)}>
              Display Array
            </Button>
          </div>
          <Button className='max-w-48 mt-2' onClick={(e: any) => handleCopy(e)}>
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>
      </form>
      <Preview data={data} />
    </div>
  )
}
