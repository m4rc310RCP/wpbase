import { split, HttpLink, ApolloClient, InMemoryCache, concat, ApolloLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from '@apollo/client/link/ws';


let uri = 'https://trade.m4rc310.com.br/graphql';
if (process.env.NODE_ENV === 'local') {
	//uri = "http://localhost:8081/graphql";
}

//uri = 'http://localhost:8080/graphql';

let wsuri = uri.replace('http', 'ws');

const httpLink = new HttpLink({
	uri: { uri },
});

const wsLink = new WebSocketLink(
	new SubscriptionClient(wsuri, {
		reconnect: true,
		connectionParams: {
			Authorization: `Test test:test`,
		},
	})
);

const authMiddleware = new ApolloLink((operation, forward) => {
	operation.setContext({
		headers: {
			Authorization: `Test test:test`,
		},
	});
	return forward(operation);
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: concat(authMiddleware, splitLink),
	cache: new InMemoryCache(),
	fetchOptions: {
		mode: 'no-cors',
	},
});

export default client;