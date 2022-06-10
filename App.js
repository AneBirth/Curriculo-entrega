import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Text,Avatar, FlatList} from '@ui-kitten/components';
import { ImageBackground } from 'react-native';


  


function Dados({ navigation }) {
  return (
      <Layout
         style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dados</Text>
        <Text>Nome : Barbie </Text>
        <Text>Idade : 26 anos</Text>
        <Avatar
       source={{uri:'https://www.seekpng.com/png/detail/8-82751_barbie-png-photo-rosto-barbie-png.png',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2
          }}
         ImageComponent={ImageBackground} />
        <Text> </Text>
        <Button title="Go to Dev" onPress={() => navigation.navigate('Dev')} />
      </Layout>
  );
}

function Dev({ navigation }) {
  return (
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Desenvolvedora </Text>
        <Text></Text>
        <Avatar
       source={{uri:'https://tudosobrebrinquedos.com.br/img/boneca-barbie-desenvolvedora-de-jogos-dmc-mattel.png',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2
          }}
         ImageComponent={ImageBackground} />
        <Text></Text>
        <Text> A barbie desenvolvedora é fullstack , e é especialista em react , em java e em Delphi , 
          mas ela também é analista de dados então seu curriculo é bastante vasto , sendo essa a sua primeira profissão.
        </Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button
          title="Go to Cantora"
          onPress={() => navigation.navigate('Cantora')}
        />
      </Layout>
  );
}

function Cantora({ navigation }) {
  return (
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Cantora</Text>
        <Text></Text>
        <Text></Text>
        <Avatar
       source={{uri:'https://www.nicepng.com/png/detail/6-62149_barbie-png-transparent-barbie-princess-and-the-popstar.png',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2
          }}
         ImageComponent={ImageBackground} />
        <Text></Text>
        <Text></Text>
        <Text> A carreira da barbie cantora é bem longa, já se aprsentou em vários lugares 
          para ela ser cantora é a missão de vida , ela tem uma voz mezosoprano inconfundivel.
        </Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </Layout>
      );
      }

      const forFade = ({ current }) => ({
      cardStyle: {
      opacity: current.progress,
      },
      });

 const Stack = createStackNavigator();

 function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dados" component={Dados} />
      <Stack.Screen
        name="Dev"
        component={Dev}
        options={{ cardStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Cantora"
        component={Cantora}
        options={{ cardStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}

   export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ApplicationProvider>
  );
}
