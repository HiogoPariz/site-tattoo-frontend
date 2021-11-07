import styled from 'styled-components'

const FocusContainer = styled.label`
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  transition: border ${({ theme }) => theme.transitions.time};
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus,
  &:active {
    border: 0.1rem solid ${({ theme }) => theme.colors.secondary};
  }
`
export default FocusContainer
