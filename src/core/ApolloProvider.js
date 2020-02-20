import ApolloClient from 'apollo-boost';

export const apolloClient = new ApolloClient({
  uri:
    'https://dwtoec86lh.execute-api.us-west-2.amazonaws.com/local/admin/graphql',
  fetchOptions: {
    fetchOptions: {
      mode: 'no-cors',
    },
  },
  onError: ({graphQLErrors, networkError}) => {
    console.log('graphQLErrors ', graphQLErrors, 'networkError ', networkError);
  },
});
