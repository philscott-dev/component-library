import React from 'react'
import styled from '@emotion/styled'

import { FC } from 'react'

interface ViewportModalBodyProps {
  className?: string
}

const ViewportModalBody: FC<ViewportModalBodyProps> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>
}

export default styled(ViewportModalBody)`
  flex: 1;
  background-color: 'blue';
`
