import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'

export interface H2Props {
  size?: 'large'
}

const H2 = styled.h2<H2Props>`
  ${sizes}
  text-transform: uppercase;
  text-align: inherit;
  font-size: 24px;
  line-height: 17px;
  margin-top: 0;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme }) => theme.color.gray[200]};
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 18px;
  }
`

/**
 * Styled Props
 */

interface StyledProps extends H2Props {
  theme: Theme
}

function sizes({ size, theme }: StyledProps) {
  if (size === 'large') {
    return css`
      font-size: 58px;
      line-height: 68px;
      @media screen and (max-width: ${theme.breakpoint.small}) {
        font-size: 40px;
        line-height: 40px;
      }
    `
  }
}

export default H2
