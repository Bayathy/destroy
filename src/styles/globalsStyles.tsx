import React from 'react'
import { css, Global } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css(css``)

const GlobalStyles = () => (
   <>
      <BaseStyles />
      <Global styles={customStyles} />
   </>
)

export default GlobalStyles
