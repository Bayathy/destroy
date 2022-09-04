import {
   CircleMarker,
   MapContainer,
   Marker,
   Popup,
   TileLayer
} from 'react-leaflet'
import React, { useEffect, useState } from 'react'
import { LatLngExpression } from 'leaflet'

import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { Box } from '../../atoms/Box'
import tw from 'twin.macro'
import { Modal, Portal } from '../../molecules/Modal'
import { ModalReviewList } from '../ModalReviewList'
import axios from 'axios'

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
   iconUrl: markerIcon.src,
   iconRetinaUrl: markerIcon2x.src,
   shadowUrl: markerShadow.src
})

export const MapBox: React.FC = () => {
   const [location, setLocation] = useState<LatLngExpression>()
   const [isModalOpen, setModalOpen] = useState<boolean>(false)
   const [reviewPositions, setreviewPositions] =
      useState<{ position: number[]; color: string }[]>()
   const [shopPositions, setshopPositions] =
      useState<{ position: number[]; color: string }[]>()

   useEffect(() => {
      const geo = navigator.geolocation
      async function getInfo() {
         await geo.getCurrentPosition(async (pos) => {
            setLocation([pos.coords.latitude, pos.coords.longitude])
            const res = await axios.get(
               `https://gourmap.herokuapp.com/location?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}`
            )
            setreviewPositions(res.data.reviewpositions)
         })
      }
      getInfo()
   }, [])

   return (
      <Box css={tw`mx-auto mb-1 z-0 relative`} limited>
         {reviewPositions && (
            <MapContainer
               center={location}
               zoom={30}
               scrollWheelZoom={false}
               style={{ height: '80vh' }}
            >
               <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <Marker position={location!}>
                  <Popup>
                     <button
                        onClick={() => {
                           setModalOpen(true)
                        }}
                     >
                        <div css={tw`width[20vh] relative`}>
                           <img
                              src="https://storage.googleapis.com/gourmap_bucket/reviewimages/92dac206-ecca-493d-983b-c05daeee7a6c.png"
                              alt="foodpic"
                           ></img>
                           <div
                              css={tw`m-auto w-4/5 h-auto text-center my-1 text-2xl rounded-2xl bg-blue-300`}
                           >
                              test
                           </div>
                        </div>
                     </button>
                  </Popup>
               </Marker>
               {reviewPositions!.map((index, key) => {
                  return (
                     <CircleMarker
                        pathOptions={{ color: index.color }}
                        key={key}
                        center={[index.position[0], index.position[1]]}
                        radius={3}
                     />
                  )
               })}
            </MapContainer>
         )}
         {isModalOpen && (
            <Portal>
               <Modal>
                  <ModalReviewList
                     sid="a"
                     closeAction={() => setModalOpen(false)}
                  />
               </Modal>
            </Portal>
         )}
      </Box>
   )
}
