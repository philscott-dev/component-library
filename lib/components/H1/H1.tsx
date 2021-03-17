import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'

export interface H1Props {
  size?: 'large'
}

const H1 = styled.h1<H1Props>`
  ${sizes}
  text-transform: uppercase;
  text-align: inherit;
  font-size: 48px;
  line-height: 40px;
  margin-top: 0;
  margin-bottom: 24px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme }) => theme.color.white[100]};
  /* @media screen and (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 32px;
    line-height: 36px;
  } */
`

/**
 * Styled Props
 */

interface StyledProps extends H1Props {
  theme: Theme
}

function sizes({ size, theme }: StyledProps) {
  if (size === 'large') {
    return css`
      font-size: 72px;
      line-height: 77px;
      @media screen and (max-width: ${theme.breakpoint.small}) {
        font-size: 56px;
        line-height: 56px;
      }
    `
  }
}

export default H1
