import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-bottom: 2rem;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    line-height: 0;
  }

  button svg {
    color: ${(props) => props.theme['green-700']};
  }
  button:disabled svg {
    color: ${(props) => props.theme['gray-600']};
  }

  ul {
    display: flex;
    gap: 0.5rem;
    list-style: none;
  }
`

interface PaginationItemProps {
  isSelected: boolean
}

export const PaginationItem = styled.li<PaginationItemProps>`
  button {
    width: 2.5rem;
    height: 2.5rem;
    background: ${(props) => props.theme['gray-600']};
    font-weight: bold;
    color: ${(props) => props.theme['gray-400']};
    border-radius: 6px;

    ${(props) =>
      props.isSelected &&
      css`
        background-color: ${(props) => props.theme['green-700']};
        color: ${(props) => props.theme.white};
      `}
  }
`
