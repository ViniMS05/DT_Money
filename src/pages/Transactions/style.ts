import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;

  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`

export const DeleteButton = styled(AlertDialog.Trigger)`
  background: transparent;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  line-height: 0;
  text-align: center;

  color: ${(props) => props.theme['gray-300']};

  &:hover {
    color: ${(props) => props.theme['red-300']};

    transition: color 0.1s;
  }
`

interface ValueHighlightProps {
  variant: 'income' | 'outcome'
}

export const ValueHighlight = styled.span<ValueHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
