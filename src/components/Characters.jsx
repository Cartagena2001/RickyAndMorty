import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 justify-items-center'>
        {
            characters.map((item, index) => (
                   <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src={item.image} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.name}</div>
                        <p className="text-gray-700 text-base">
                        {item.location.name}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.gender}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.species}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.status}</span>
                    </div>
                </div> 
            ))
        }
        </div>  
    </div> 
  )
}

export default Characters