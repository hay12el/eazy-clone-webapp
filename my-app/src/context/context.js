import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  token: localStorage.getItem("token") || undefined,
  userName: localStorage.getItem("userName") || undefined,
  isAdmin: localStorage.getItem("isAdmin") || false,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        token: action.payload.token,
        userName: action.payload.userName,
        isAuth: true,
        isAdmin: action.payload.isAdmin,
      };
    case "LOGOUT":
      return {
        token: null,
        userName: undefined,
        isAuth: false,
        isAdmin: false,
      };
    default:
      return state;
  }
};

// create provider

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("token", state.token);
    localStorage.setItem("userName", state.userName);
    localStorage.setItem("isAdmin", state.isAdmin);
  }, [state.token, state.userName, state.isAdmin]);

  return (
    <AuthContext.Provider
      value={{
        userName: state.userName,
        token: state.token,
        isAdmin: state.isAdmin,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
