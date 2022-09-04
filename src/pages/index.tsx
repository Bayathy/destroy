import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { HomeLayout } from '../components/template/HomeLayout'
import { fidState } from '../context/fid'
// eslint-disable-next-line @typescript-eslint/ban-types
const MyAwesomeMap = dynamic<{}>(
   () =>
      import('../components/organisms/MapBox').then((module) => module.MapBox),
   { ssr: false }
)

const Home: NextPage = () => {
   const [isModalOpen, setModalOpen] = useState<boolean>(false)

   const [_, setfid] = useRecoilState(fidState);

   useEffect(() => {
      fetch("https://www.google.com/").then(res => console.log(res))
      const geo = navigator.geolocation

      // geo.getCurrentPosition((pos) =>
      //    axios.get(`https://gourmap.herokuapp.com/location?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}`)
      //       .then(res => console.log(res))
      //       .catch(function (error) { console.log(error) })
      // )
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
         <MyAwesomeMap />
      </HomeLayout>
   )
}

export default Home

