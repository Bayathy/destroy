import axios from 'axios'
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

   const [, setfid] = useRecoilState(fidState);

   useEffect(() => {
      axios.get("").then(res => `${process.env.SERVER_PATH}`)
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
function useRecoilState(fidState: any): [any, any] {
   throw new Error('Function not implemented.')
}

function fidState(fidState: any): [any, any] {
   throw new Error('Function not implemented.')
}

function useEffect(arg0: () => void, arg1: never[]) {
   throw new Error('Function not implemented.')
}

