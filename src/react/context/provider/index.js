import React, { createContext, useContext, useState } from "react";
import { gql, useSubscription } from '@apollo/client';
import { MPanelNoActive } from '../../containers/panel'

const DashboardContext = createContext(null);


const SUB_CONTROL = gql`
    subscription {
        CONTROLE {
            in_habilitado
            nr_versao
        }
    }
`;

export const DashboardProvider = ({ children }) => {
    const [enable, setEnable] = useState(false);

    useSubscription(SUB_CONTROL, {
        fetchPolicy:"no-cache",
        onData: data => {
            const {in_habilitado} = data?.data.data.CONTROLE
            setEnable(in_habilitado);
        }
    })

    const data = {};

    return (
        <DashboardContext.Provider value={data}>
            {enable? children : <MPanelNoActive />}
        </DashboardContext.Provider>
    )

}


export const DashboardProvider_ = ({ children }) => {
    const {data:dt_control} = useSubscription(SUB_CONTROL, {
        fetchPolicy:"network-only"}
    );
    
    const { in_habilitado : active  } = dt_control?.CONTROLE ?? {};
    
    const data = {
        active
    };



    return (
        <DashboardContext.Provider value={data}>
            {active? children : <MPanelNoActive />}
        </DashboardContext.Provider>
    );
}

export const useDash = () => useContext(DashboardContext);