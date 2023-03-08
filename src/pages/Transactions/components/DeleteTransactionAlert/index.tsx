import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Trash } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionContext'
import {
  CancelButton,
  Content,
  Overlay,
  DeleteButton,
  FlexButtons,
} from './style'

interface DeleteTransactionProps {
  transactionId: number
}

export function DeleteTransactionAlert({
  transactionId,
}: DeleteTransactionProps) {
  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.deleteTransaction
    },
  )

  return (
    <AlertDialog.Portal>
      <Overlay />

      <Content>
        <AlertDialog.Title>
          Você tem certeza que deseja excluir está transação?
        </AlertDialog.Title>
        <AlertDialog.Description>
          <p>Ao excluir a transação ela será completamente perdida.</p>
          <p>
            Não será possivel recupera-la, a não ser que você crie uma nova
            transação.
          </p>
        </AlertDialog.Description>

        <FlexButtons>
          <CancelButton>Cancelar</CancelButton>

          <DeleteButton onClick={() => deleteTransaction(transactionId)}>
            <Trash size={24} />
            Excluir
          </DeleteButton>
        </FlexButtons>
      </Content>
    </AlertDialog.Portal>
  )
}
