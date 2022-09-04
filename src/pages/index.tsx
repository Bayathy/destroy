import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { HomeLayout } from '../components/template/HomeLayout'
// eslint-disable-next-line @typescript-eslint/ban-types
const MyAwesomeMap = dynamic<{}>(
   () =>
      import('../components/organisms/MapBox').then((module) => module.MapBox),
   { ssr: false }
)

const Home: NextPage = () => {
   const [isModalOpen, setModalOpen] = useState<boolean>(false)

   return (
      <HomeLayout
         Headertitle="GourMap"
         leftButton="/"
         rightButton={() => {
            setModalOpen(true)
         }}
         isModalOpen={isModalOpen}
         closeAction={() => {
            setModalOpen(false)
         }}
      >
         <MyAwesomeMap />
      </HomeLayout>
   )
}

export default Home
