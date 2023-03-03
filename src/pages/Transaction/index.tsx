import { Header } from "../../components/Header";
import { SearchForm } from "./components/SearchForm";
import { Summary } from "../../components/Summary";
import {
  ValueHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./style";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionContext";

export function Transaction() {
  const { transactions } = useContext(TransactionsContext);

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
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <ValueHighlight variant={transaction.type}>
                      {transaction.value}
                    </ValueHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
