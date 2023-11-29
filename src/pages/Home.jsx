import React from 'react'
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <div className='bg-cover h-screen flex justify-center items-center ' style={{backgroundImage:"url('src/assets/bg.jpg')"}}>
<div className="grow ml-5">
<SearchBar/>
</div>
<div className="shrink w-3/6">
    <img src="src/assets/doc.png" alt="" className=''/>
</div>
    </div>
  )
}

export default Home