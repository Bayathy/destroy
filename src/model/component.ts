import { CSSInterpolation } from '@emotion/serialize'
import { JSXElementConstructor } from 'react'
import { TwStyle } from 'twin.macro'

export type Component<
   T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
> = {
   children?: React.ReactNode
   css?: CSSInterpolation | TwStyle
} & React.ComponentProps<T>
