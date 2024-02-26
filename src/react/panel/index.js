import React, {useEffect} from "react";

import { LogoCoamo } from '../../images';
import { useApp } from '../context';


export const PanelDefault = () => {
    const { version, enable } = useApp();

    useEffect(()=> {

        const handleBeforeUnload = (event) => {
            // Se a flag for verdadeira, cancelamos o evento de recarregamento
            if (window.preventReload) {
                console.log('update')
                event.preventDefault();
                event.returnValue = ''; // Para navegadores mais antigos
            }
          };


        const handleKeyPress = (event) => {
            if (event.keyCode === 116) { 
                console.log('update')
                event.preventDefault();

            }
          };

          window.addEventListener('keydown', handleKeyPress);
          window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('beforeunload', handleBeforeUnload);

        };
    },[])

    return (
        <div className="flex bg-black text-white w-screen h-screen">
            <div className="grid w-52 h-auto mx-auto my-auto">
                <img src={LogoCoamo} alt="Logo da Coamo" />
                <h1 className="text-xs text-right  font-mono mt-2 my-auto">{version} - {enable ? 'habilitado' : 'desabilitado' }</h1>
            </div>
        </div>
    )
}