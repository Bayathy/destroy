import React from 'react'
import tw from 'twin.macro'
import { Box } from '../../atoms/Box'
import { Text } from '../../atoms/Text'
import { MenuTab, MenuTabProparty } from '../MenuTab'

export type HeaderProparty = {
   Headertitle: string
   isHomeLayout: boolean
} & MenuTabProparty

export const Header: React.FC<HeaderProparty> = ({
   Headertitle,
   leftButton,
   rightButton,
   isHomeLayout
}) => {
   return (
      <header>
         {isHomeLayout ? (
            <div css={tw`w-screen height[20svh] py-2 bg-yellow-300`}>
               <Box
                  css={tw`m-auto h-1/2 flex justify-center items-center`}
                  limited
               >
                  <span>
                     <Text css={tw`text-center text-4xl`}>{Headertitle}</Text>
                  </span>
               </Box>
               <MenuTab rightButton={rightButton} leftButton={leftButton} />
            </div>
         ) : (
            <div css={tw`w-screen height[10svh] py-2 bg-yellow-300`}>
               <Box
                  css={tw`m-auto h-full flex justify-center items-center`}
                  limited
               >
                  <span>
                     <Text css={tw`text-center text-4xl`}>{Headertitle}</Text>
                  </span>
               </Box>
            </div>
         )}
      </header>
   )
}
