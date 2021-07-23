import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const DetallesPantalla = ({route}) => {
  const {movie} = route.params;
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const api_url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=edcf6f8a`;
    fetch(api_url)
      .then(data => {
        return data.json();
      })
      .then(resultado => {
        setDatos(resultado);
        console.log(datos);
      });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        {datos.Poster === 'N/A' ? (
          <View style={styles.borde}>
            <Image
              style={styles.images}
              source={require('../image/nofound.jpg')}
            />
          </View>
        ) : (
          <View>
            <Image style={styles.images} source={{uri: datos.Poster}} />
          </View>
        )}
        <View style={styles.container}>
          <Text style={styles.bordetext}>Fecha de exhibicion:</Text>
          <Text style={styles.txtinput}>{datos.Released}</Text>
          <Text style={styles.bordetext}>Genero de pelicula:</Text>
          <Text style={styles.txtinput}>{datos.Genre}</Text>
          <Text style={styles.bordetext}>Productora:</Text>
          <Text style={styles.txtinput}>{datos.Production}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  images: {
    width: 350,
    height: 350,
    margin: 5,
    borderRadius: 10,
  },
  txt: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    color: 'red',
    height: 150,
    textAlign: 'center',
    margin: 10,
  },
  borde: {
    height: 50,
    fontSize: 20,
    width: 41,
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'black',
    textAlign: 'center',
    color: '#ffff',
  },
  bordetext: {
    height: 50,
    fontSize: 20,
    width: 400,
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#3b6ca7',
    textAlign: 'center',
    color: '#ffff',
  },
  txtinput: {
    justifyContent: 'center',
    paddingTop: 10,
    color: 'black',
    height: 40,
    textAlign: 'center',
    margin: 10,
  }
});
