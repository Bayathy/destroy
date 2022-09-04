/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import React from 'react'
import { Component } from '../../../model/component'

export const Anchor: React.FC<Component<'a'> & { href: string }> = ({
   href,
   children,
   css,
   ...rest
}) => {
   return (
      <Link href={href}>
         <a {...rest} css={css}>
            {children}
         </a>
      </Link>
   )
}
