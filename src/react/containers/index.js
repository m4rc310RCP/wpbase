import React, {useState, useEffect} from 'react';
import {gql, useSubscription} from '@apollo/client';

// Querie's
const SUB_CONTROL = gql`
    subscription {
        CONTROLE {
            in_habitado
            nr_versao
        }
    }
`;

const SUB_COT = gql`
    subscription {
        COTACAO_MERCADORIA{
            cd_mercadoria nm_mercadoria dt_atualizacao
        }
    }
`;

//Main[default -> no active api]
const MPanelNoActive = () => {
    return(
        <div>
            No-Active
        </div>
    );
}

const MPanelActive = () => {
    const {data} = useSubscription(SUB_COT);
    const cots = data?.COTACAO_MERCADORIA || [];
    return(
        <div>
            Active
            {cots.map(cot => (
                <div key={cot.cd_mercadoria}>
                    <p>{cot.nm_mercadoria}</p>
                    <p>{cot.dt_atualizacao}</p>
                </div>
            ))}
        </div>
    );
}

export const MPanelMain = () => {
    const [active, setActive] = useState(true);

    //const {data, loading} = useSubscription(SUB_CONTROL);

    //if (data & !loading){
    //    setActive(data.CONTROLE.in_habitado);
    //}
    
    //return(active? MPanelActive : MPanelNoActive);
    // useSubscription(SUB_CONTROL, { onComplete: data => {
    //     if (data){
    //         console.log('---> {}', data.CONTROLE.in_habitado)
    //         //setActive(data.CONTROLE.in_habitado)
    //     }
    // }, fetchPolicy:'network-only'});



    if (active){
        return (<MPanelActive />)
    }
    return(<MPanelNoActive/>)
}