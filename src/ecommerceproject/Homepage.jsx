import React from 'react'

function Homepage() {
  return (
    <div>
        <section id="Homepage" className='w-full h-full flex flex-col items-center justify-center px-4'>
            <div className='text-lg'>Homepage</div>
        </section>
        <section id="Page2" className='w-full min-h-screen flex flex-col items-center justify-center px-4'>
            <div>Page2</div>
        </section>
        <section id="Page3" className='w-full min-h-screen flex flex-col items-center justify-center px-4'>
            <div>Page3</div>
        </section>
    </div>
  )
}

export default Homepage