import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = Cookies.get("token") || false;

  async function verifyToken() {
    if (token) {
      try {
        const res = await axios.get(`http://localhost:8000/Verify_token`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token != null) {
      verifyToken();
    }
  }, [token]);

  const login = (token) => {
    Cookies.set("token", token);
    setLoading(true);
    verifyToken();
    window.location.href = "/dashboard"; 
  };

  const logout = () => {
    Cookies.remove("token");
    setUserData(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ userData, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
