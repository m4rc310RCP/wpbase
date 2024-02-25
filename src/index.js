// import soma from './cal';
// import Heading from './heading';
// import './style.css';


// console.log('Test webpack 2');
// soma(10, 5);
// soma(10, 55);

// const heading = new Heading();
// heading.create('Text dynamic 123455...')

import React from 'react';
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'

import { MPanelMain } from './react/containers'
import {client} from './react/graphql';
import './style.css';


const div = document.createElement('div');
div.id = "root"
document.querySelector('body').appendChild(div);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
        <MPanelMain />
        </ApolloProvider>
    </React.StrictMode>
);
