import { memo } from 'react'

interface SearchProps {
  onChange: (text: string) => void
}

function Search({onChange}: SearchProps) {
  console.log('Search rendered');
  
  return (
    <input type="text" 
    placeholder='Seach usere...'
    onChange={(e) => onChange(e.target.value)}
    />
  )
}

//Memo is another hook and checks if the info is the same if it is re-render else skip render
export default memo(Search) 