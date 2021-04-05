import styled from '@emotion/styled'
import { FC } from 'react'
import { IconButton, H4, Overlay } from 'components'
import { FiX } from 'react-icons/fi'

export interface ModalProps {
  className?: string
  title: string
  children: any
  isVisible: boolean
  onClose?: () => void
}

const Modal: FC<ModalProps> = ({
  className,
  title,
  children,
  isVisible,
  onClose,
}) => {
  return (
    <>
      <Overlay isVisible={isVisible} />
      <Wrapper className={className} isVisible={isVisible}>
        <TitleBar>
          <Title>{title}</Title>
          {onClose ? (
            <IconButton color="gray" onMouseDown={onClose}>
              <FiX />
            </IconButton>
          ) : null}
        </TitleBar>
        {children}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div<{ isVisible: boolean }>`
  z-index: 2;
  padding: 0 40px 32px 40px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto auto;
  background: ${({ theme }) => theme.color.indigo[600]};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  min-width: 500px;
  transition: ${({ theme }) => theme.transition.all};
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.xsmall}) {
    min-width: inherit;
    padding: 40px 64px;
    max-height: 100vh;
  }
`

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`

const Title = styled(H4)`
  margin-bottom: 0;
`

export default Modal
