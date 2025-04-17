import React from 'react'

function History() {
  return (
    <div>
         <div className='w-[75%] mx-auto mt-[2em]  h-fit px-[1em] py-[1em] bg-gradient-to-r from-[#FFFFFF40] to-[#FFFFFF1A] rounded-[1em]'>
      <a href="$">
        <div className='flex items-center space-between w-[100%] h-fit'>
          <nav className='flex w-full items-center justify-between'>
            <div className='flex items-center space-x-[1em] w-[75%]'>
              <img src='/restore.png' alt="user" className="h-[1.5em]" />
              <h3 className='text-[1.3em] text-white'>History</h3>
            </div>
            <button>
              <img src='/right-chevron.png' alt="next" className="h-[1.5em]" />
            </button>
          </nav>
        </div>
      </a>
    </div>
    </div>
  )
}

export default History
