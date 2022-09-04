/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import tw from 'twin.macro'
import { Box } from '../../atoms/Box'
import { Text } from '../../atoms/Text'
import { Icon } from '@iconify/react'
import { Button } from '../../atoms/Button'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

export type PostformProparty = {
   closeAction: () => unknown
}

type FormInputs = {
   review: string
   sid: string
}

export const ModalPostform: React.FC<PostformProparty> = ({ closeAction }) => {
   const [isSlect, setSelect] = useState<boolean>()
   const { control, register, handleSubmit } = useForm<FormInputs>()

   const [uploadImage, setuploadImage] = useState<string>();

   const handleImage = (event: any) => {
      if (!(event.target.files[0] == undefined)) {
         const image = event.target.files[0];
         setuploadImage(window.URL.createObjectURL(image));
      }
   };

   const options = [
      { value: 1, label: '1_label' },
      { value: 2, label: '2_label' },
      { value: 3, label: '3_label' }
   ]

   return (
      <Box css={tw`bg-white w-10/12 h-auto rounded-2xl`} limited>
         <Box css={tw`flex flex-col h-full items-center pb-4`}>
            <Box css={tw`flex justify-end w-full`}>
               <Button
                  css={tw`p-3 bg-yellow-100 rounded-full mr-2 mt-2`}
                  onclick={closeAction}
               >
                  <Icon icon="akar-icons:cross" />
               </Button>
            </Box>
            <Box>
               <Text css={tw`text-center text-2xl`}>投稿する</Text>
            </Box>
            <Box css={tw`w-4/5 m-auto`}>
               <form onSubmit={handleSubmit((data) => console.log(data))}>
                  <label>
                     店を選択
                     <Controller
                        name="sid"
                        rules={{ required: true }}
                        control={control}
                        render={({ field: { onChange } }) => (
                           <Select
                              placeholder={isSlect ?? '選択してください'}
                              options={options}
                              onChange={(c) => {
                                 onChange(c?.value)
                                 setSelect(true)
                              }}
                           />
                        )}
                     />
                  </label>
                  <label>
                     レポっを入力
                     <textarea
                        required
                        maxLength={60}
                        placeholder="60字まで"
                        css={tw`p-2 w-full border-2 rounded-2xl height[10vh] resize-none`}
                        {...register('review')}
                     />
                  </label>
                  {
                     uploadImage && <img css={tw`my-1 object-contain height[20vh] w-full`} src={uploadImage} alt="user upload" />
                  }
                  <label
                     css={tw`bg-blue-500 block m-auto w-1/2 text-white py-1 px-3 text-center text-sm rounded-2xl`}
                  >
                     <input
                        type="file"
                        name="file"
                        css={tw`display[none]`}
                        onChange={handleImage}
                     />
                     写真を選択
                  </label>
                  <input
                     css={tw`m-auto h-auto py-2 text-white mt-3 rounded-2xl w-full bg-blue-500 block`}
                     type="submit"
                  />
               </form>
            </Box>
         </Box>
      </Box>
   )
}
