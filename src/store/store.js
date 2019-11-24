import React, { useReducer, createContext, useContext } from "react";

export const initialState = {
  primary: null,
  secondary: null
};

export const StateContext = createContext();
export const useStateStore = () => useContext(StateContext);
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const reducer = (state, action) => {
  switch (action.type) {
    case "setPrimary":
      return { ...state, primary: action.payload }
    case "setSecondary":
      return { ...state, secondary: action.payload }
  }
};