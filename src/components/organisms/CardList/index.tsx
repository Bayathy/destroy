import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useRecoilState } from 'recoil'
import tw from 'twin.macro'
import { fidState } from '../../../context/fid'
import { Box } from '../../atoms/Box'
import { Card } from '../../molecules/Card'


export const CardList: React.FC = () => {
   const [reviewList, setReviewList] = useState<{ sid: string, text: string, shopname: string }[]>()
   const [sortId, setsottId] = useState<string>()

   const [fid, _] = useRecoilState(fidState)

   useEffect(() => {
      const getInfo = async () => {
         console.log(fid)
         const res = await axios.get(`https://gourmap.herokuapp.com/reviews/?fid=${fid}`)
         setReviewList(res.data.reviews.map((index: { sid: any; text: any; shopname: any }) => ({ sid: index.sid, text: index.text, shopname: index.shopname })))
         console.log(reviewList)
      }
      getInfo()
   }, [])


   return (
      <Box css={tw`m-auto`} limited>
         <Select
            options={reviewList?.map(index => ({ value: index.sid, label: index.shopname }))}
            onChange={(c) => {
               // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
               setsottId(c?.value!)
            }}
            isClearable
         />
         {
            !!reviewList && reviewList.flatMap((index, key) =>
               !sortId ? (
                  <Card key={key} storename={index.shopname} text={index.text} />
               ) : index.sid === sortId ? (
                  <Card key={key} storename={index.shopname} text={index.text} />
               ) : undefined
            )
         }

      </Box>
   )
}
