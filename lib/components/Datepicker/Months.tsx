import React from 'react'
import { FC } from 'react'
import styled from '@emotion/styled'

export interface MonthsProps {
  className?: string
}

const Months: FC<MonthsProps> = ({ className }) => {
  return <div className={className}></div>
}

export default styled(Months)
