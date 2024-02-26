import React from "react";
import {gql} from '@apollo/client'

export const SUB_CONTROL = gql`
    subscription {
        CONTROLE {
            in_habilitado
            nr_versao
        }
    }
  
`;