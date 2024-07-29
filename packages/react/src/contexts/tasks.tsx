import { createContext } from "react";

export const TasksContext = createContext({ list: [] })

export const TasksProvider: React.FC<{ children: React.ReactNode }> = function ({ children }) {
  return (
    <TasksContext.Provider value={{ list: [] }}>
      {children}
    </TasksContext.Provider>
  )
}
