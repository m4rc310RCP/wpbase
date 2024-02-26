import React, { useState, useEffect } from 'react';
import { gql, useSubscription } from '@apollo/client';

const SUB_COT = gql`
    subscription {
        COTACAO_MERCADORIA{
            cd_mercadoria nm_mercadoria dt_atualizacao
        }
    }
`;

const MCardCot = (cot) => {
    return (
        <div>
            <p>{cot.nm_mercadoria}</p>
        </div>
    )
}

const MPanelActive = () => {
    const { data:dt_cot, loading } = useSubscription(SUB_COT, {
        fetchPolicy:'no-cache'
    },);
    const cots = dt_cot?.COTACAO_MERCADORIA || [];
    console.log('> {}', cots)
    return (
        <div>
            {loading && <p>Aguardando cotação agrícola...</p>}
            {
                cots.map(cot => {
                    <MCardCot key={cot.cd_mercadoria} {...cot} />
                })
            }

            {/* {cots.map(cot => (
                <div key={cot.cd_mercadoria}>
                    <p>{cot.nm_mercadoria}</p>
                    <p>{cot.dt_atualizacao}</p>
                </div>
            ))} */}
        </div>
    );
}
export default MPanelActive;