import styled from '@emotion/styled'
import { FC } from 'react'
import { Grid } from 'svg-loaders-react'

export interface LoadingIndicatorProps {
  className?: string
  isLoading: boolean
  color?: string
}
const LoadingIndicator: FC<LoadingIndicatorProps> = ({
  className,
  isLoading = false,
  color = '#d3cbfd',
}) => {
  if (!isLoading) {
    return null
  }
  return (
    <div className={className}>
      <Grid stroke={color} strokeOpacity="1" />
    </div>
  )
}

export default styled(LoadingIndicator)`
  left: 32px;
  bottom: 32px;
  box-sizing: border-box;
  z-index: 1000;
  pointer-events: none;
  > svg {
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    margin-right: 8px;
    stroke: ${({ theme }) => theme.color.indigo[300]};
    fill: ${({ theme }) => theme.color.indigo[300]};
  }
  > p {
    margin-left: 16px;
  }
`

// const pulse = keyframes`
//    0% { transform: scale(0.9); opacity: 0.7; }
//     50% { transform: scale(1); opacity: 1; }
//     100% { transform: scale(0.9); opacity: 0.7; }
// `
