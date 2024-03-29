import { color } from 'native-base/lib/typescript/theme/styled-system';
import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image
} from 'react-native';
const width = Dimensions.get('window').width / 2 - 20;
import * as Animatable from 'react-native-animatable';
import vehicle from '../screens/vehicle'

export default function MenuHome({ navigation }) {

  const categories = ['LUXURY', 'PRIMUM','NORMAL'];


  const [categoryIndex, setCategoryIndex] = React.useState(0)

  const CategoryList = () => {
    return <View style={styles.categoryContainer}>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setCategoryIndex(index)}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.categoryText,
              categoryIndex == index && styles.categoryTextSelected
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>;
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row', height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: 10 * 2,
            justifyContent: 'center'
          }}
        >
          <Image
            source={require('../assets/location.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30
            }}
          />
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View
            style={{
              width: '70%',
              height: "80%",
              backgroundColor: "#EFEFF1",
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30
            }}
          >
            <Text style={{ fontFamily: "Roboto-Bold", fontSize: 18, lineHeight: 22 }}>Location</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: 10 * 2,
            justifyContent: 'center'
          }}
        >
          <Image
            source={require('../assets/vehicle.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  function renderMainCategories() {
    return (
      <View style={{ padding: 10 * 2 }}>
        <Text style={{ fontFamily: "Roboto-Black", fontSize: 30, lineHeight: 36 }}>Main</Text>
        <Text style={{ fontFamily: "Roboto-Black", fontSize: 30, lineHeight: 36 }}>Categories</Text>
      </View>
    )
  }

  const Card = ({ vehicle }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', vehicle)}>
        <View style={styles.card}>
          <View style={{ alignItems: 'flex-end' }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: vehicle.like
                //   ? 'rgba(245, 42, 42,0.2)'
                //   : 'rgba(0,0,0,0.2) ',
              }}>
            </View>
          </View>

          <View
            style={{
              height: 120,
              alignItems: 'center',
              marginBottom:-20
            }}>
            <Image
              source={require('../assets/car4.png')}
              style={{ flex: 1, resizeMode: 'contain',marginTop:-30}}
            />
          </View>

          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
            Alto
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              $10,000
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: 'green',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const Card1 = ({ vehicle }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', vehicle)}>
        <View style={styles.card}>
          <View style={{ alignItems: 'flex-end' }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: vehicle.like
                //   ? 'rgba(245, 42, 42,0.2)'
                //   : 'rgba(0,0,0,0.2) ',
              }}>
            </View>
          </View>

          <View
            style={{
              height: 105,
              alignItems: 'center',
              marginBottom:0,
            }}>
            <Image
              source={require('../assets/car1.png')}
              style={{ flex: 1, resizeMode: 'contain',marginTop:-20,marginLeft:10}}
            />
          </View>

          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
            Aqua
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              $13,000
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: 'green',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const Card2 = ({ vehicle }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', vehicle)}>
        <View style={styles.card}>
          <View style={{ alignItems: 'flex-end' }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: vehicle.like
                //   ? 'rgba(245, 42, 42,0.2)'
                //   : 'rgba(0,0,0,0.2) ',
              }}>
            </View>
          </View>

          <View
            style={{
              height: 150,
              alignItems: 'center',
              marginBottom:-50
            }}>
            <Image
              source={require('../assets/car2.png')}
              style={{ flex: 1, resizeMode: 'contain',marginTop:-10,marginLeft:-58}}
            />
          </View>

          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
            Honda CIVC
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              $23,400
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: 'green',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const Card3 = ({ vehicle }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', vehicle)}>
        <View style={styles.card}>
          <View style={{ alignItems: 'flex-end' }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: vehicle.like
                //   ? 'rgba(245, 42, 42,0.2)'
                //   : 'rgba(0,0,0,0.2) ',
              }}>
            </View>
          </View>

          <View
            style={{
              height: 120,
              marginBottom:-20,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/car3.png')}
              style={{ flex: 1, resizeMode: 'contain',marginTop:-10}}
            />
          </View>

          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
            Honda CIVI
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              $24,500
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: 'green',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      <CategoryList />
      <View style={{ flexDirection: 'row', marginLeft: 15 }}>
        <Card />
        <Card1 />
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 15 }}>
        <Card2 />
        <Card3 />
      </View>


      {/* <FlatList
        numColumns={2}
        data={vehicle}
        renderItem={({ item }) => {
          return <Card vehicle={item} />;
        }}
      /> */}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  categoryText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold'
  },
  categoryTextSelected: {
    color: 'green',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: 'green'
  },
  card: {
    height: 210,
    backgroundColor: '#EFEFF1',
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
  }
})
