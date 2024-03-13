import React from 'react'

const Classwork = () => {
    const artists = ['Davido', 'Tems', 'Wizkid', 'Burna Boy', 'Wande coal', 'Asake']
  return (
    <>
    {
        artists.map((artist) => {
            return <h3>{artist}</h3>
        })
    }
    </>
  )
}

export default Classwork