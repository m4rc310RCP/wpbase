import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { LogoCoamo } from '../images';
import {client} from './graphql'
import { MPanelMain } from './containers'

//export const Home = () => {return (<MPanelMain />);}

const Home_ = () => {
    /* const [now, setNow] = useState('---');
    useEffect(() => {
        const id = setInterval(() => setNow(format(new Date(), 'HH:mm:ss')), 1000);
        return () => clearInterval(id);
    }, [])
 */
    // if (data){
    //     return(
    //         <div>
    //             <p>{data.CONTROLE.in_habitado}</p>
    //             <p>Habilitado</p>
    //         </div>
    //     )
    // }

    return (
            <div className='bg-black h-screen flex'>
                <div className='my-auto mx-auto'>
                    <img className='w-96 h-auto' src={LogoCoamo} />
                    <p className='text-xs text-center pt-4 text-white'>
                        {now}
                    </p>

                </div>
            </div>
    );
}

