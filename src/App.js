import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {gql} from 'apollo-boost';
import {apolloClient} from './core/ApolloProvider';
import {ApolloProvider} from '@apollo/react-hooks';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const {Navigator, Screen} = createStackNavigator();

const client = apolloClient
  .mutate({
    mutation: gql`
      mutation {
        loginUser(input: {email: "mehul.thakkar@tech9.com"}) {
          isLoggedIn
        }
      }
    `,
  })
  .then(data => console.log('data ', data))
  .catch(error => console.log('error ', error));

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Overview'}}
          />
          <Screen name="Details" component={DetailsScreen} />
        </Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
