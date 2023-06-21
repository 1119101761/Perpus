import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function BerandaPengguna({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer1}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image style={styles.MenuBeranda} source={require('../assets/RotiMalamKerak.jpg')} />
        <Image style={styles.MenuBeranda} source={require('../assets/RotiCroicant.jpg')} />
        <Image style={styles.MenuBeranda} source={require('../assets/PancakeBluberry.jpg')} />
        <Image style={styles.MenuBeranda} source={require('../assets/Sandwitch.jpg')} />
        <Text style={styles.titleContainer}>QA BAKERY</Text>
        <Text style={styles.paragrafContainer}>QA Bakery su</Text>
        <Text style={styles.titleContainer}>Title Kedua</Text>
        <Text style={styles.paragrafContainer}>Paragraf kedua</Text>
        <Text style={styles.titleContainer}>Title Ketiga</Text>
        <Text style={styles.paragrafContainer}>Paragraf ketiga</Text>
      </ScrollView>
      <View style={styles.buttonContainer2}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Belanja')}
        >
          <View style={styles.buttonContent}>
            <Ionicons name="cart-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Belanja</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Riwayat')}
        >
          <View style={styles.buttonContent}>
            <Ionicons name="time-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Riwayat</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BerandaPengguna')}
        >
          <View style={styles.buttonContent}>
            <Ionicons name="home-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Promo')}
        >
          <View style={styles.buttonContent}>
            <Ionicons name="ios-pricetags-sharp" size={24} color="white" />
            <Text style={styles.buttonText}>Promo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tampilan')}
        >
          <View style={styles.buttonContent}>
            <MaterialIcons name="account-box" size={24} color="white" />
            <Text style={styles.buttonText}>Akun</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%', 
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  titleContainer: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3C3D64',
    marginBottom: 10,
    borderRadius: 10,
    borderColor: 'white',
    margin: 10,
  },
  paragrafContainer: {
    fontSize: 12,
    color: '#3C3D64',
    marginBottom: 10,
    textAlign: 'justify',
  },
  buttonContainer1: {
    alignItems: 'center',
    //flexDirection: 'row',
    width: '100%',
    height: 120,
    backgroundColor: '#4c1518',
  },
  logo: {

    width: 150,
    height: 150,
  },
  buttonContainer2: {
    flexDirection: 'row',
    width: '100%',
    height: 75,
    backgroundColor: '#4c1518',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonText: {
    alignItems: 'center',
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5, // Jarak antara ikon dan teks
  },
  MenuBeranda: {
    height: 200,
    width: '100%',
    marginBottom: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  
});
