import React from 'react'
import tw from 'twin.macro'
import { Anchor } from '../../atoms/Anchor'
import { Box } from '../../atoms/Box'

export type MenuTabProparty = {
   leftButton?: string
   rightButton?: () => unknown
}

export const MenuTab: React.FC<MenuTabProparty> = ({
   leftButton,
   rightButton
}) => {
   return (
      <nav css={tw`h-1/2`}>
         <Box css={[tw`m-auto h-full`]} limited>
            <ol css={tw`flex h-full justify-around w-full`}>
               <li
                  css={tw`w-2/5 h-2/3 m-auto bg-white rounded-2xl flex justify-center items-center`}
               >
                  <Anchor css={tw`block text-center`} href={leftButton ?? './'}>
                     れぽっみる
                  </Anchor>
               </li>
               <li
                  css={tw`w-2/5 h-2/3 m-auto bg-white rounded-2xl flex items-center justify-center`}
               >
                  <button onClick={rightButton}>れぽっる</button>
               </li>
            </ol>
         </Box>
      </nav>
   )
}
