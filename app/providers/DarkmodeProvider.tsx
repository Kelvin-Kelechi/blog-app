"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the context type
interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Create the context with default values
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

// Create the provider component
export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check for dark mode preference in localStorage or system preference
    const storedMode = localStorage.getItem("darkMode");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialMode =
      storedMode !== null ? storedMode === "true" : prefersDarkMode;
    setDarkMode(initialMode);

    // Apply the initial mode immediately
    if (initialMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setIsInitialized(true); // Mark initialization as complete
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;

      // Persist mode and update class
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }

      return newMode;
    });
  };

  if (!isInitialized) {
    return null; // Optionally render a loader or nothing
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use dark mode context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
