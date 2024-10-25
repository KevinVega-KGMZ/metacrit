import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { getLatestGames } from './lib/metacritic';

export default function App() {
  const [games,setGames] = useState([]);
  useEffect(()=> {
    getLatestGames().then((games) => {
      setGames(games)
    })
  },[]);

  return (
    <View style={styles.container}>
     <ScrollView>
     {games.map((game) => 
      <View style={styles.container2} key={games.slug}>
        <Image source= {{uri:game.image}} style={styles.image}></Image>
        <View style ={styles.container3} >
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.normal}>{game.score}</Text>
          <Text style={styles.normal}>{game.description}</Text>
        </View>
      </View>
      )}
     </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:100,
    height:100,
    borderRadius:10
  },
  title: {
    fontWeight:'bold',
    fontSize:20
  },
  normal: {
    fontWeight:'italic',
    fontSize:10
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically
    padding: 10,
    borderBottomWidth: 1, // Optional: for separation
    borderBottomColor: '#ccc',
  },
  container3: {
    flex: 0,
    margin: 20,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'left',
  }
});
