import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { HomeLayout } from '../components/template/HomeLayout'
// eslint-disable-next-line @typescript-eslint/ban-types
const MyAwesomeMap = dynamic<{}>(
   () =>
      import('../components/organisms/MapBox').then((module) => module.MapBox),
   { ssr: false }
)

const Home: NextPage = () => {
   return (
      <HomeLayout>
         <MyAwesomeMap />
      </HomeLayout>
   )
}

export default Home
