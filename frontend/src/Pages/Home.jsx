import React from 'react'

import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewLaunches from '../Components/NewLaunches/NewLaunches'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      {/* <NewLaunches /> */}
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Home
