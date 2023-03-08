import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Trash, X } from 'phosphor-react'
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
  const { deleteTransaction, fetchTransactions } = useContextSelector(
    TransactionsContext,
    (context) => {
      return context
    },
  )

  function handleDeleteTransaction(id: number) {
    deleteTransaction(id)
    fetchTransactions()
  }

  return (
    <AlertDialog.Portal>
      <Overlay />

      <Content>
        <AlertDialog.Title>
          Você tem certeza que deseja excluir está transação?
        </AlertDialog.Title>
        <AlertDialog.Description>
          Ao excluir a transação ela será completamente perdida.
          <br />
          Não será possivel recupera-la, a não ser que você crie uma nova
          transação.
        </AlertDialog.Description>

        <hr />

        <FlexButtons>
          <CancelButton>
            <X size={24} />
            Cancelar
          </CancelButton>

          <DeleteButton onClick={() => handleDeleteTransaction(transactionId)}>
            <Trash size={24} />
            Excluir
          </DeleteButton>
        </FlexButtons>
      </Content>
    </AlertDialog.Portal>
  )
}
