import React from 'react'
import Card1 from './Comps/Card1'
import Card2 from './Comps/Card2'
import Card3 from './Comps/Card3'

function Home() {
  return (
<>
<div className='flex flex-col flex-wrap'>

<div className='flex container flex-wrap p-2 justify-center h-max '>
    <Card1/>
    <Card1/>
    <Card1/>
    <Card1/>
    <Card1/>
    <Card1/>
</div>

<div className='flex container flex-wrap p-2 justify-center h-max '>
<Card3/>
    <Card2/>
    <Card2/>
</div>
<div className='flex container flex-wrap p-2 justify-center h-max '>
<Card1/>
<Card2/>
<Card3/>
   
</div>
</div>

</>
  )
}

export default Home