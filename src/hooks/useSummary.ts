import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionContext'

export function useSummary() {
  const totalTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.totalTransactions
    },
  )

  const summary = totalTransactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.value
        acc.total += transaction.value
      } else {
        acc.outcome += transaction.value
        acc.total -= transaction.value
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
