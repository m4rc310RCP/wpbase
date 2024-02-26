import React from 'react';
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { client } from './react/graphql';
import { AppProvider } from './react/context'
import { PanelDefault } from './react/panel'
import './style.css';

const div = document.createElement('div');
div.id = "root"
document.querySelector('body').appendChild(div);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <ApolloProvider client={client}>
        <AppProvider>
            <PanelDefault />
        </AppProvider>
    </ApolloProvider>
);
