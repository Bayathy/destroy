import React from 'react'
import { Component } from '../../../model/component'
import tw from 'twin.macro'

export const Box: React.FC<Component<'div'> & { limited?: boolean }> = ({
   limited,
   children,
   css,
   ...rest
}) => {
   return (
      <>
         {limited ? (
            <div css={[tw`max-w-4xl`, css]} {...rest}>
               {children}
            </div>
         ) : (
            <div css={css} {...rest}>
               {children}
            </div>
         )}
      </>
   )
}
