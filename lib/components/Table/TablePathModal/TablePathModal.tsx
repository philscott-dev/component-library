import styled from '@emotion/styled'
import { FC, useEffect, useState } from 'react'
import { Modal, ModalProps, Text, Button } from 'components'
import { PathMap } from 'utils/pathMap'

interface TablePathModalProps
  extends Pick<ModalProps, 'className' | 'isVisible' | 'onClose'> {
  pathMap?: PathMap
  userPaths?: string[]
  onConfirm: () => void
}

const TablePathModal: FC<TablePathModalProps> = ({
  className,
  isVisible,
  pathMap = [],
  userPaths = [],
  onClose,
  onConfirm,
}) => {
  const [paths, setPaths] = useState<{ isSelected: boolean; path: string }[]>(
    [],
  )
  useEffect(() => {
    setPaths(
      Object.entries(pathMap).map(([path]) => ({
        isSelected: false,
        path: path.substring(2),
      })),
    )
  }, [pathMap])
  return (
    <Modal
      className={className}
      isVisible={isVisible}
      onClose={onClose}
      title={'Select Paths'}
    >
      <Text>Please select path properties</Text>
      <Body>
        {paths.map(({ isSelected, path }) => (
          <Text>{path}</Text>
        ))}
      </Body>
      <Flex>
        <ModalButton variant="tertiary" onMouseDown={onClose}>
          Cancel
        </ModalButton>
        <ModalButton onMouseDown={onConfirm}>Confirm</ModalButton>
      </Flex>
    </Modal>
  )
}

export default styled(TablePathModal)``

const Body = styled.div``

const Flex = styled.div`
  display: flex;
`

const ModalButton = styled(Button)`
  flex: 1;
  :nth-of-type(1) {
    margin-right: 8px;
  }
  :nth-of-type(2) {
    margin-left: 8px;
  }
`
