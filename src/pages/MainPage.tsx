import React, { FC } from 'react'
import { Header } from '../components/Header'
import { Player } from '../components/Player'
import { Sidebar } from '../components/Sidebar'
import { TrackList } from '../components/TrackList'

interface IProps {}

/**
* @author
* @function @MainPage
**/

export const MainPage:FC<IProps> = (props) => {
  return (
    <div className="grid grid-rows-3 grid-cols-6 h-full">

      <nav className="col-span-1 row-span-3 bg-gray-700 pt-6">
        <Sidebar />
      </nav>

      <main className="col-span-5 row-span-3 overflow-auto">
        <Header />
        <TrackList />
      </main>
      
      <footer className="bg-gray-200 col-span-6 p-4 grid grid-cols-3 gap-6">
        <Player />
      </footer>

    </div>  
  )
}