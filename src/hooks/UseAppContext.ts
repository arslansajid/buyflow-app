import Context from "../context/AppContext";
import { useContext } from "react";

const useAppContext = () => useContext(Context);

export default useAppContext;
