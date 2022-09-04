/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import { Component } from '../../../model/component'

export const Anchor: React.FC<Component<'a'> & { href: string }> = ({
   href,
   children,
   css,
   ...rest
}) => {
   return (
      <Link href={href}>
         <a {...rest} css={[tw`w-full block`, css]}>
            {children}
         </a>
      </Link>
   )
}
