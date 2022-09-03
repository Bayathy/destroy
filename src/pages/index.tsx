import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
const MyAwesomeMap = dynamic<{}>(
   () =>
      import('../components/organisms/MapBox').then((module) => module.MapBox),
   { ssr: false }
)

const Home: NextPage = () => {
   return <MyAwesomeMap />
}

export default Home
