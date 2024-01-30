import React from 'react';
import { ScrollView, View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

export default function HomeScreen({ navigation }: any) {
  const handleSearch = () => {
    // Implement your search functionality here
    console.log('Search button pressed');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image
        source={require('./logoUniv.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      
      {/* College Name */}
      <Text style={styles.collegeName}>
        كلية العلوم
      </Text>

      {/* College Description */}
      <Text style={styles.collegeDescription}>
        {/* Add your college description text here */}
      </Text>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Class by name ..."
          onChangeText={(text) => console.log(text)} // You can handle the onChangeText event as needed
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Video */}
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: 'https://www.youtube.com/watch?v=Zn2GWJaQJqE' }}
          style={styles.video}
          controls={true}
          resizeMode="cover"
        />
      </View>

      {/* Main Image */}
      <View style={styles.mainImageContainer}>
        <Image
          source={require('./img55.jpg')}
          style={styles.mainImage}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>مبنى كلية العلوم رقم 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details2')}
        >
          <Text style={styles.buttonText}>مبنى كلية العلوم رقم 5</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 90,
    marginBottom: 10,
  },
  collegeName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2F539B',
    marginBottom: 10,
  },
  collegeDescription: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#2F539B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoContainer: {
    width: '100%',
    aspectRatio: 16/9,
    backgroundColor: '#000',
    marginBottom: 20,
  },
  video: {
    flex: 1,
  },
  mainImageContainer: {
    width: '100%',
    aspectRatio: 4/3,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#2F539B',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
