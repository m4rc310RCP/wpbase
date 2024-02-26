import React, { useState } from 'react';
import { gql, useSubscription } from '@apollo/client';
import { useDash } from '../../../context/provider'


const MPanelMain = () => {
    const { active } = useDash();
    return (
        <div>
            Main
        </div>
    )
}

export default MPanelMain;