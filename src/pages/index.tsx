import axios from 'axios'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { MapBoxproperty } from '../components/organisms/MapBox'
import { HomeLayout } from '../components/template/HomeLayout'
import { fidState } from '../context/fid'
// eslint-disable-next-line @typescript-eslint/ban-types
const MyAwesomeMap = dynamic<MapBoxproperty>(
   () =>
      import('../components/organisms/MapBox').then((module) => module.MapBox),
   { ssr: false }
)

const Home: NextPage = () => {
   const [isModalOpen, setModalOpen] = useState<boolean>(false)

   // eslint-disable-next-line prefer-const
   let positions: { position: number[]; color: string }[] = []

   const [_, setfid] = useRecoilState(fidState);

   useEffect(() => {
      const geo = navigator.geolocation
      geo.getCurrentPosition((pos) => {
         axios.get(`https://gourmap.herokuapp.com/location?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}`)
            .then(res => {
               setfid(res.data.fid)
            })
      })
   }, [])

   return (
      <HomeLayout
         Headertitle="GourMap"
         leftButton="/List"
         rightButton={() => {
            setModalOpen(true)
         }}
         isModalOpen={isModalOpen}
         closeAction={() => {
            setModalOpen(false)
         }}
         isHomeLayout={true}
      >
         <MyAwesomeMap positions={positions} />
      </HomeLayout>
   )
}

export default Home

