import styled from '@emotion/styled'

export interface PortalMountProps {
  id: string
}

const PortalMount = styled.div<PortalMountProps>`
  position: relative;
`

export default PortalMount
