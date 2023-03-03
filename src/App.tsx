import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/TransactionContext";
import { Transaction } from "./pages/Transaction";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
