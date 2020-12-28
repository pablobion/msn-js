import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export default function CountProvider({ children }) {
    const [count, setCount] = useState(0);

    return (
        <UserContext.Provider
            value={{
                count,
                setCount,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useCount() {
    const context = useContext(UserContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { count, setCount } = context;
    return { count, setCount };
}
