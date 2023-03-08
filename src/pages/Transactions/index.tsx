import { Header } from '../../components/Header'
import { SearchForm } from './components/SearchForm'
import { Summary } from '../../components/Summary'
import {
  ValueHighlight,
  TransactionsContainer,
  TransactionsTable,
  DeleteButton,
} from './style'

import { TransactionsContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'
import { DeleteTransactionAlert } from './components/DeleteTransactionAlert'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Trash } from 'phosphor-react'
import { Pagination } from '../../components/Pagination'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <ValueHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.value)}
                    </ValueHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td>
                    <AlertDialog.Root>
                      <DeleteButton>
                        <Trash size={24} weight="bold" />
                      </DeleteButton>
                      <DeleteTransactionAlert transactionId={transaction.id} />
                    </AlertDialog.Root>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

      <Pagination />
    </>
  )
}
