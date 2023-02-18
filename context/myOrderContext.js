import React, { createContext, useState } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const MyOrderContext = createContext([undefined]);
const MyOrderDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function MyOrderProvider({ children }) {
  const [myOrder, setMyOrder] = useState([]);

  return (
    <MyOrderContext.Provider value={myOrder}>
      <MyOrderDispatchContext.Provider value={setMyOrder}>
        {children}
      </MyOrderDispatchContext.Provider>
    </MyOrderContext.Provider>
  );
}

export { MyOrderProvider, MyOrderContext, MyOrderDispatchContext };