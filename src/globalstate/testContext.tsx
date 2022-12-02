import React, { useState, useEffect, createContext, useContext } from "react";

interface contexProps {
    children?: React.ReactNode;
  }

  
interface CartContextItems {
  seconds: number;
  running: boolean;
  names?: string[];
  onToggle: () => void;
}

const CartContext = createContext<CartContextItems>({
  seconds: 0,
  running: false,
  onToggle: () => {},
});

const useCartContextItems = (): CartContextItems => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [data, setData] = useState<{
    names: string[];
  }>();

  useEffect(() => {
    if (running) {
      const timer = setInterval(() => {
        setSeconds((seconds) => seconds + 0.1);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [running]);

  useEffect(() => {
    if (seconds > 2) {
      fetch("/names.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [seconds > 2]);

  return {
    seconds,
    running,
    onToggle: () => setRunning((running) => !running),
    names: data?.names,
  };
};

export const CartContextProvider: React.FunctionComponent<contexProps> = ({
  children,
}) => (
  <CartContext.Provider value={useCartContextItems()}>
    {children}
  </CartContext.Provider>
);

export const useCartContext = () => useContext(CartContext);
