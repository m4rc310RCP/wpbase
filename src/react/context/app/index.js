import React, {createContext, useContext, useState, useEffect} from "react";
import { useSubscription } from '@apollo/client';
import { SUB_CONTROL } from  '../../graphql/queries'

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {

    const [version, setVersion] = useState('...');
    const [enable, setEnable]   = useState(false);

    useEffect(()=>{
        setVersion('v 1.0.1');
    }, []);

    useSubscription(SUB_CONTROL, {
        fetchPolicy: "network-only",
        onData: (data)=>{
            const {in_habilitado, nr_versao} = data?.data.data.CONTROLE;
            setVersion(nr_versao);
            setEnable(in_habilitado);
        }
    })

    const value = {
        version, enable
    }

    return(
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext);