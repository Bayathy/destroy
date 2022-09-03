import React from 'react'
import tw from 'twin.macro'
import { Box } from '../../atoms/Box'
import { Text } from '../../atoms/Text'
import { Icon } from '@iconify/react'
import { Button } from '../../atoms/Button'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
   example: string
   exampleRequired: string
}

const onSubmit: SubmitHandler<Inputs> = (data) => {
   console.log(data)
}

export const ModalPostform: React.FC = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
   } = useForm<Inputs>()

   return (
      <Box
         css={tw`bg-white w-4/5 h-4/5 rounded-2xl flex flex-col items-center`}
         limited
      >
         <Box css={tw`flex justify-end w-full`}>
            <Button css={tw`p-3 bg-yellow-100 rounded-full mr-2 mt-2`}>
               <Icon icon="akar-icons:cross" />
            </Button>
         </Box>
         <Box>
            <Text css={tw`text-center text-2xl`}>投稿する</Text>
         </Box>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register('example')} />
            <input {...register('exampleRequired', { required: true })} />
            <input type="submit" />
         </form>
      </Box>
   )
}
