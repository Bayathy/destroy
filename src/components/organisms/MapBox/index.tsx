import {
   CircleMarker,
   MapContainer,
   Marker,
   Popup,
   TileLayer
} from 'react-leaflet'
import React from 'react'
import { LatLngExpression } from 'leaflet'

import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { css } from '@emotion/react'
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
   const position: LatLngExpression = [51.505, -0.09]
   return (
      <Box css={tw`m-auto`} limited>
         <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '80svh', width: '100%', zIndex: -10 }}
         >
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
               <Popup>
                  <button
                     css={css`
                     color: aqua;
                     padding: 10rem;
                  `}
                     onClick={() => alert('aaaa')}
                  >
                     button
                  </button>
               </Popup>
            </Marker>
            <CircleMarker center={[51.51, -0.12]} radius={3}>
               <Popup>Popup in CircleMarker</Popup>
            </CircleMarker>
         </MapContainer>
      </Box>
   )
}
