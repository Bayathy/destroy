import {
   CircleMarker,
   MapContainer,
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

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
   iconUrl: markerIcon.src,
   iconRetinaUrl: markerIcon2x.src,
   shadowUrl: markerShadow.src
})

export const MapBox: React.FC = () => {
   const [location, setLocation] = useState<LatLngExpression>()

   useEffect(() => {
      const geo = navigator.geolocation
      geo.getCurrentPosition((pos) => {
         setLocation([pos.coords.latitude, pos.coords.longitude])
      })
   }, [])

   return (
      <Box css={tw`mx-auto mb-1 z-0 relative`} limited>
         {location && (
            <MapContainer
               center={location}
               zoom={30}
               scrollWheelZoom={false}
               style={{ height: '80svh' }}
            >
               <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <CircleMarker center={location} radius={3}>
                  <Popup>Popup in CircleMarker</Popup>
               </CircleMarker>
            </MapContainer>
         )}
      </Box>
   )
}
