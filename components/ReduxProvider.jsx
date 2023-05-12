"use client";

import { Provider } from "react-redux";

const ReduxProvider = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default ReduxProvider;
