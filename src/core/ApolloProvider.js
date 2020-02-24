import ApolloClient from 'apollo-boost';
import {REACT_APP_GRAPHQL_URL} from 'react-native-dotenv';

export const apolloClient = new ApolloClient({
  uri: REACT_APP_GRAPHQL_URL,
  fetchOptions: {
    fetchOptions: {
      mode: 'no-cors',
    },
  },
  onError: ({graphQLErrors, networkError}) => {
    console.log('graphQLErrors ', graphQLErrors, 'networkError ', networkError);
  },
});
