import React from 'react'
import tw from 'twin.macro'
import { Component } from '../../../model/component'

export const Button: React.FC<Component<'button'> & { onclick?: () => unknown }> = ({
   children,
   css,
   onclick,
   ...rest
}) => {
   return (
      <button css={[tw`p-2`, css]} {...rest} onClick={onclick}>
         {children}
      </button>
   )
}
