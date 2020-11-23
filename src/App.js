import React from "react";
import { HashRouter } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import PayrollScreen from "./components/Payroll/PayrollScreen";

function App() {
  return (
    <HashRouter>
      <div className='main-app'>
        <div className='flex'>
          <Sidebar />
          <PayrollScreen />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
