import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthcontexProvider({children}) {
   const [user, setUser] = useState(false);

   const Login=()=>{
      setUser(true)
   }

   const Logout=()=>{
      setUser(false)
   }

   return (
      <AuthContext.Provider value={{ user,Login,Logout }}>
         {children}
      </AuthContext.Provider>
   );
}

