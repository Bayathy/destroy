import React from 'react'
import tw from 'twin.macro'
import { Box } from '../../atoms/Box'
import { Text } from '../../atoms/Text'
import { Icon } from '@iconify/react'
import { Button } from '../../atoms/Button'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

export const ModalPostform: React.FC = () => {
   const { control } = useForm()

   const options = [
      { value: '1_value', label: '1_label' },
      { value: '2_value', label: '2_label' },
      { value: '3_value', label: '3_label' }
   ]

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
         <form>
            <Controller
               name="selectValue"
               rules={{ required: true }}
               control={control}
               render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <Box css={tw`w-full`}>
                     <Select options={options} isClearable />
                  </Box>
               )}
            />
         </form>
      </Box>
   )
}
