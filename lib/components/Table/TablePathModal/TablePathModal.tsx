import styled from '@emotion/styled'
import { FC, MouseEvent, useState } from 'react'
import { Modal, ModalProps, Text, Button } from 'components'
import { PathMap } from 'utils/pathMap'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'

interface TablePathModalProps
  extends Pick<ModalProps, 'className' | 'isVisible' | 'onClose'> {
  pathMap?: PathMap
  userPaths?: string[]
  onConfirm: (paths: string[]) => void
}

const TablePathModal: FC<TablePathModalProps> = ({
  className,
  isVisible,
  pathMap = [],
  userPaths = [],
  onClose,
  onConfirm,
}) => {
  const [selected, setSelected] = useState<string[]>(userPaths)

  const handleSelectPath = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget
    const index = selected.indexOf(value)
    if (index >= 0) {
      setSelected([...selected.slice(0, index), ...selected.slice(index + 1)])
    } else {
      setSelected([...selected, value])
    }
  }

  const handleConfirm = () => {
    onConfirm(selected)
  }
  return (
    <Modal
      className={className}
      isVisible={isVisible}
      onClose={onClose}
      title={'Select Paths'}
    >
      <Text>Please select path properties</Text>
      <Body>
        {Object.entries(pathMap)
          .sort()
          .map(([path]) => (
            <OptionButton
              key={path}
              value={path}
              onMouseDown={handleSelectPath}
            >
              {selected.some((val) => path == val) ? (
                <FiCheckSquare />
              ) : (
                <FiSquare />
              )}
              <Text>{path.substring(2)}</Text>
            </OptionButton>
          ))}
      </Body>
      <Flex>
        <ModalButton variant="tertiary" onMouseDown={onClose}>
          Cancel
        </ModalButton>
        <ModalButton onMouseDown={handleConfirm}>Confirm</ModalButton>
      </Flex>
    </Modal>
  )
}

export default styled(TablePathModal)``

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 32px;
`

const Flex = styled.div`
  display: flex;
  > button {
    box-shadow: none;
  }
`

const OptionButton = styled.button`
  flex: 1;
  min-width: 400px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.blue[300]};
  margin: 8px 0;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  > svg {
    color: ${({ theme }) => theme.color.white[100]};
    font-size: 20px;
    margin-right: 20px;
  }
  &:hover {
    > p {
      color: ${({ theme }) => theme.color.blue[300]};
      transition: all 0.2s ease-in-out;
    }
  }
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
