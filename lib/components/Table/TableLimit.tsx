import styled from '@emotion/styled'
import { FC } from 'react'

interface TableLimitProps {
  className?: string
}

const TableLimit: FC<TableLimitProps> = ({ className }) => {
  return <div className={className}></div>
}

export default styled(TableLimit)``
