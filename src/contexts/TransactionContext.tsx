import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Transactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  value: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  value: number
  type: 'income' | 'outcome'
  category: string
}

interface TransactionsContextType {
  transactions: Transactions[]
  pages: number[]
  currentPage: number
  totalTransactions: Transactions[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  deleteTransaction: (id: number) => void
  changePage: (pageIndex: number) => void
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])
  const [totalTransactions, setTotalTransactions] = useState<Transactions[]>([])

  const limit = 8
  const [pages, setPages] = useState([] as number[])
  const [currentPage, setCurrentPage] = useState(1)

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const response = await api.get('/transactions', {
        params: {
          _page: currentPage,
          _limit: limit,
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })

      setTransactions(response.data)
    },
    [limit, currentPage],
  )

  const fetchTotalTransactions = async () => {
    const response = await api.get('/transactions')

    setTotalTransactions(response.data)
  }

  const deleteTransaction = (id: number) => {
    api.delete(`/transactions/${id}`)

    const transactionsWithDeletedOne = transactions.filter((transaction) => {
      return transaction.id !== id
    })

    setTransactions(transactionsWithDeletedOne)
  }

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, category, value, type } = data

      const response = await api.post('/transactions', {
        description,
        value,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  const changePage = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  useEffect(() => {
    // Pagination
    const transactions = totalTransactions.length

    const totalPages = Math.ceil(transactions / limit)

    const pagesList = []
    for (let i = 1; i <= totalPages; i++) {
      pagesList.push(i)
    }
    setPages(pagesList)
  }, [totalTransactions, limit, transactions])

  useEffect(() => {
    fetchTransactions()
    fetchTotalTransactions()
  }, [currentPage])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        totalTransactions,
        fetchTransactions,
        createTransaction,
        deleteTransaction,
        pages,
        currentPage,
        changePage,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
