import axios from 'axios'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import tw from 'twin.macro'
import { HomeLayout } from '../components/template/HomeLayout'
import { fidState } from '../context/fid'
// eslint-disable-next-line @typescript-eslint/ban-types
const MyAwesomeMap = dynamic<{}>(() => import('../components/organisms/MapBox').then((module) => module.MapBox), {
   ssr: false
})

const Home: NextPage = () => {
   const [isModalOpen, setModalOpen] = useState<boolean>(false)
   const [resAccess, setResAccess] = useState<number[]>()
   const [reslogo, setReslogo] = useState<string>()

   const [, setfid] = useRecoilState(fidState)

   useEffect(() => {
      const geo = navigator.geolocation
      geo.getCurrentPosition(async (pos) => {
         const res = await axios.get(
            `https://gourmap.herokuapp.com/location?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}`
         )
         setfid(res.data.fid)
         setReslogo(res.data.logo)
         setResAccess(res.data.accesses)
      })
   }, [])

   return (
      <>
         {reslogo ?
            <HomeLayout
               Headertitle={reslogo as string}
               leftButton="/List"
               rightButton={() => {
                  setModalOpen(true)
               }}
               isModalOpen={isModalOpen}
               closeAction={() => {
                  setModalOpen(false)
               }}
               isHomeLayout={true}
               accesses={resAccess}
            >
               <MyAwesomeMap />
            </HomeLayout>
            : <div css={tw`w-screen h-screen flex justify-center items-center`}><p>Loading</p></div>
         }
      </>
   )
}

export default Home
