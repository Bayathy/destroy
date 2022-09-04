import React from 'react'
import tw from 'twin.macro'
import { Box } from '../../atoms/Box'
import Image from 'next/image'

export type CardProparty = {
   storename: string
   text: string
}

export const Card: React.FC<CardProparty> = ({ text, storename }) => {
   return (
      <Box css={tw`grid grid-template-columns[2fr 1fr] w-full h-36 p-2`}>
         <div css={tw`flex flex-col`}>
            <div css={tw`h-auto text-center mx-1 border-b-2`}>
               <p css={tw`text-2xl`}>{storename}</p>
            </div>
            <div css={tw`text-sm w-4/5 mx-auto`}>{text}</div>
         </div>
         <div css={tw`relative`}>
            <Image
               src={
                  'https://storage.googleapis.com/gourmap_bucket/reviewimages/92dac206-ecca-493d-983b-c05daeee7a6c.png'
               }
               objectFit={'contain'}
               layout={'fill'}
            />
         </div>
      </Box>
   )
}
