import styled from '@emotion/styled'

export interface OverlayProps {
  isVisible: boolean
  onMouseDown?: () => void
}

const Overlay = styled.div<OverlayProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: -webkit-fill-available;
  width: 100%;
  height: 100vh;
  width: 100vw;
  opacity: ${({ isVisible }) => (isVisible ? 0.5 : 0)};
  background: ${({ theme }) => theme.color.blue[700]};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: ${({ isVisible }) => (isVisible ? 0.5 : 0)};
`

export default Overlay
