import React, { useState, useEffect } from 'react';
import { LogoCoamo } from '../../../../images';
import { format } from 'date-fns';

const MPanelNoActive = () => {
    const [now, setNow] = useState('---');
    
    useEffect(()=>{
        const id = setInterval(() => setNow(format(new Date(), 'HH:mm:ss')), 1000);
        return ()=> clearInterval(id);
    }, []);

    return (
        <div className='bg-black h-screen flex'>
            <div className='my-auto mx-auto'>
                <img className='w-72 h-auto' src={LogoCoamo} />
                <p className='text-xs font-mono text-center pt-4 text-white'>
                    {now}
                </p>
            </div>
        </div>
    );
}

export default MPanelNoActive;