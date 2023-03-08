import { CaretLeft, CaretRight } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { PaginationContainer, PaginationItem } from './style'

export function Pagination() {
  const { pages, changePage, currentPage } = useContextSelector(
    TransactionsContext,
    (context) => {
      return context
    },
  )

  return (
    <PaginationContainer>
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage < pages.length}
      >
        <CaretLeft size={24} />
      </button>
      <ul>
        {pages.map((page) => {
          return (
            <PaginationItem key={page} isSelected={currentPage === page}>
              <button onClick={() => changePage(page)}>{page}</button>
            </PaginationItem>
          )
        })}
      </ul>
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage >= pages.length}
      >
        <CaretRight size={24} />
      </button>
    </PaginationContainer>
  )
}
