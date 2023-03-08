import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styled from 'styled-components'

export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 1000vh;

  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(AlertDialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: ${(props) => props.theme['gray-100']};

  hr {
    height: 2px;
    border: 0;
    background-color: ${(props) => props.theme['green-500']};
  }
`

export const FlexButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CancelButton = styled(AlertDialog.Cancel)`
  background: ${(props) => props.theme['gray-700']};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme['gray-300']};
  font-weight: bold;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['gray-600']};
    transition: color 0.2s;
  }
`

export const DeleteButton = styled(AlertDialog.Action)`
  background: transparent;
  border: 1px solid ${(props) => props.theme['red-300']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme['red-300']};
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${(props) => props.theme['red-300']};
    color: ${(props) => props.theme.white};

    transition: color 0.2s, background 0.2s;
  }
`
