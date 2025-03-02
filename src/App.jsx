/** @format */

import React from "react";
import "./App.css";
import { Balance } from "./components/Balance";

import Header from "./components/Header";
import { TransactionList } from "./components/TranscationList";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
