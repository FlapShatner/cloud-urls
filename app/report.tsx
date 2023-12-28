export const generateReport = async (cloudName: string, tagName: string) => {
  const response = await fetch(`https://res.cloudinary.com/${cloudName}/image/list/${tagName}.json`)
  if (!response.ok) {
    console.error('Network response was not ok')
    return
  }

  const data = await response.json()
  const rows = [['PUBLIC_ID', 'SECURE_URL']]
  const url = `https://res.cloudinary.com/${cloudName}/image/`

  data.resources.forEach((el: { version: any; type: any; public_id: string; format: any }) => {
    const secureUrl = el.version ? `${url}${el.type}/v${el.version}/${el.public_id}.${el.format}` : `${url}${el.type}/${el.public_id}.${el.format}`
    rows.push([el.public_id, secureUrl])
  })

  let csvString = rows.map((rowArray) => rowArray.join(',')).join('\r\n')
  return csvString
}

export const getUrlArray = async (cloudName: string, tagName: string): Promise<string[]> => {
  const response = await fetch(`https://res.cloudinary.com/${cloudName}/image/list/${tagName}.json`)
  if (!response.ok) {
    console.error('Network response was not ok')
    return [] // Return an empty array in case of an error
  }

  const data = await response.json()
  const url = `https://res.cloudinary.com/${cloudName}/image/`

  const urls = data.resources.map((el: { version: any; type: any; public_id: string; format: any }) => {
    return el.version ? `${url}${el.type}/v${el.version}/${el.public_id}.${el.format}` : `${url}${el.type}/${el.public_id}.${el.format}`
  })
  console.log(await urls)
  return urls
}

export const downloadCSV = (csvContent: string, tagName: string) => {
  const blob = new Blob([csvContent], { type: 'text/plain' })
  const href = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = href
  link.download = `${tagName}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
