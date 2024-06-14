import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import TransactionsPage from "./pages/TransactionsPage";
import InvestmentsPage from "./pages/InvestmentsPage";
import AccountsPage from "./pages/AccountsPage";
import CreditCardsPage from "./pages/CreditCardsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="accounts" element={<AccountsPage />} />
          <Route path="investments" element={<InvestmentsPage />} />
          <Route path="credit-cards" element={<CreditCardsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
