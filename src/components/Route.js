import React from "react";
import { Switch, Route } from "react-router-dom";
import PayrollTable from "./Payroll/PayrollScreen";

function Routes() {
  return (
    <Switch>
      <Route
        exact
        key='Payroll'
        path='/payroll-table'
        component={PayrollTable}
      />
    </Switch>
  );
}

export default Routes;
