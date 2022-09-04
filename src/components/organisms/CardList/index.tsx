import React, { useState } from 'react'
import Select from 'react-select'
import tw from 'twin.macro'
import { Box } from '../../atoms/Box'
import { Card } from '../../molecules/Card'

export const CardList: React.FC = () => {
   const reviewList = [
      { label: 'storename1', text: 'review', sid: 1 },
      { label: 'storename2', text: 'review', sid: 2 },
      { label: 'storename3', text: 'review', sid: 3 }
   ]

   const [sortId, setsottId] = useState<number>()

   return (
      <Box css={tw`m-auto`} limited>
         <Select
            options={reviewList}
            onChange={(c) => {
               setsottId(c?.sid)
            }}
            isClearable
         />
         {reviewList.flatMap((index, key) =>
            !sortId ? (
               <Card key={key} storename={index.label} text={index.text} />
            ) : index.sid === sortId ? (
               <Card key={key} storename={index.label} text={index.text} />
            ) : undefined
         )}
      </Box>
   )
}
