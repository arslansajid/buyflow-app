import React, { ReactElement, createContext, useCallback, useState } from "react";

export type UpdateContextType = (key: string, value: string | number) => void;

export interface InitalStateInterface {
  firstName: string,
  lastName: string,
  email: string,
  age: number,
}

export interface AppContextInterface {
  data: InitalStateInterface,
  updateData: UpdateContextType,
  resetData: () => void,
}
interface ContextProps {
  children: (ReactElement | null | false)[];
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
}

const Context = createContext<AppContextInterface>({
  data: initialState,
  updateData: () => {},
  resetData: () => {},
});

export const AppContextProvider: React.FC<ContextProps> = (props) => {
  const [data, setData] = useState<InitalStateInterface>(initialState);

  const updateData = useCallback((key: string, value: string | number) => {
    setData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  const resetData = useCallback(() => {
    setData({ ...initialState });
  }, []);

  const providerValue = React.useMemo(
    () => ({
      data,
      updateData,
      resetData
    }),
    [
      data,
      updateData,
      resetData
    ]
  );

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};

export default Context;
