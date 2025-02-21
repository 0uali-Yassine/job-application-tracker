import React, { createContext, useContext, useState} from 'react';
import Data from "./Data";

const myContext = createContext();

function Context({children}) {

   const [DataJobs,setDataJobs] = useState(Data);


  return (
    <myContext.Provider value={{DataJobs,setDataJobs}}>
        {children}
    </myContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(myContext);
}

export default Context;