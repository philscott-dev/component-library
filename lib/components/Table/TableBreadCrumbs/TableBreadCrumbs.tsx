import { FC, useContext } from 'react'
import styled from '@emotion/styled'
import TableBasePath from './TableBasePath'
import TablePath from './TablePath'
import { BreadCrumb } from '../types'
import { TableContext } from '../TableContext'

interface TableBreadCrumbsProps {
  className?: string
  baseLabel?: string
  onClick?: (index: number, breadCrumb: BreadCrumb) => void
  onBaseClick?: () => void
}

const TableBreadCrumbs: FC<TableBreadCrumbsProps> = ({
  className,
  baseLabel,
  onClick,
  onBaseClick,
}) => {
  const { tablePath, breadCrumbs, setBreadCrumbs, setTablePath } = useContext(
    TableContext,
  )
  const handleBaseBreadCrumbClick = () => {
    if (setBreadCrumbs && setTablePath) {
      setBreadCrumbs([])
      setTablePath([])
    }
    if (onBaseClick) {
      onBaseClick()
    }
  }
  const handleBreadCrumbClick = (index: number, breadCrumb: BreadCrumb) => {
    if (tablePath && breadCrumbs && setBreadCrumbs && setTablePath) {
      setBreadCrumbs(breadCrumbs.slice(0, index + 1))
      setTablePath(tablePath.slice(0, index + 1))
      if (onClick) {
        onClick(index, breadCrumb)
      }
    }
  }

  return (
    <Container className={className}>
      <TableBasePath label={baseLabel} onClick={handleBaseBreadCrumbClick} />
      {breadCrumbs?.map((path, index) => (
        <TablePath
          key={index}
          index={index}
          href={path.href}
          label={path.label}
          onClick={handleBreadCrumbClick}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  text-transform: capitalize;
  margin-bottom: 16px;
`

export default TableBreadCrumbs
