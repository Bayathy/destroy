import React from 'react'
import tw from 'twin.macro'
import { Box } from '../../atoms/Box'
import { Button } from '../../atoms/Button'
import { Icon } from '@iconify/react'
import { Card } from '../../molecules/Card'

export type ListProparty = {
   closeAction: () => unknown
   sid: string
}

export const ModalReviewList: React.FC<ListProparty> = ({ closeAction, sid }) => {
   const reviewList = [
      { label: 'storename1', text: 'review', sid: 'a' },
      { label: 'storename2', text: 'review', sid: 'a' },
      { label: 'storename3', text: 'review', sid: 'a' },
      { label: 'storename2', text: 'review', sid: 'a' },
      { label: 'storename3', text: 'review', sid: 'a' }
   ]

   return (
      <Box css={tw`bg-white w-10/12 height[80vh] rounded-2xl m-auto `} limited>
         <Box css={tw`flex justify-end w-full`}>
            <Button css={tw`p-3 bg-yellow-100 rounded-full mr-2 mt-2`} onclick={closeAction}>
               <Icon icon="akar-icons:cross" />
            </Button>
         </Box>
         <Box css={tw`h-4/5 overflow-scroll mt-2`}>
            {reviewList.flatMap((index, key) =>
               index.sid == sid ? <Card key={key} storename={index.label} text={index.text} /> : undefined
            )}
         </Box>
      </Box>
   )
}
