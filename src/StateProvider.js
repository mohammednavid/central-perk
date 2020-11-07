import React, { createContext, useContext, useReducer } from "react";

// CREATE THE DATA LAYER
export const StateContext = createContext();

// WRAP OUR APP AND PROVIDE THE DATA LAYER FOR DISPATCH TAKE ACTION
export const StateProvider = ({ initialState, reducer, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// FOR PULL INFORMATION FROM DATA LAYER
export const useStateContext = () => useContext(StateContext);
