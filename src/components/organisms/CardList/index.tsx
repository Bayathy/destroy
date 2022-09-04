import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import tw from 'twin.macro'
import { Box } from '../../atoms/Box'
import { Card } from '../../molecules/Card'

export type CardListProparty = {
    selectid?: number
}


export const CardList: React.FC<CardListProparty> = ({ selectid }) => {
    const reviewList = [
        { label: 'storename1', text: 'review', sid: 1 },
        { label: 'storename2', text: 'review', sid: 2 },
        { label: 'storename3', text: 'review', sid: 3 }
    ]

    console.log(selectid)
    const [sortId, setsottId] = useState<number>()

    useEffect(() => {
        const id = selectid
        setsottId(id)
        console.log("sortid", sortId)

    }, [])

    return (
        <Box css={tw`m-auto`} limited>
            <Select
                options={reviewList}
                onChange={(c) => {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                    setsottId(c?.sid!)
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
