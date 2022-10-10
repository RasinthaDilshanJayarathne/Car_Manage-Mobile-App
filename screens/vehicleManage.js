import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';


export default function vehicleManage({ navigation }) {

  const saveData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          Reg_Number: Reg_Number,
          Brand: Brand,
          Fuel_Type: Fuel_Type,
          Date:Date,
          Price:Price,
          Location:Location
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => { Alert.alert("Save Saved Successfully !") })
        .catch((err) => { Alert.alert("Error occured !") })
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
            <Text style={{ fontFamily: "Roboto-Bold", fontSize: 18, lineHeight: 22 }}></Text>
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

  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false
      });
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      <View style={{ padding: 10 * 2 }}>
        <Text style={{ fontFamily: "Roboto-Black", fontSize: 30, lineHeight: 36 }}>Manage</Text>
        <Text style={{ fontFamily: "Roboto-Black", fontSize: 30, lineHeight: 36 }}>All Vehicles</Text>
      </View>
      <View style={styles.addImage}></View>
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <TextInput style={styles.input} placeholder="Register No" />
        <TextInput style={styles.input} placeholder="Brand" />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TextInput style={styles.input} placeholder="Price" />
        <TextInput style={styles.input} placeholder="Fuel Type" />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TextInput style={styles.input} placeholder="Date" />
        <TextInput style={styles.input} placeholder="Location" />
      </View>
      <View>
        <TouchableOpacity
          //onPress={() => navigation.goBack()}
          style={{
            width: '60%',
            backgroundColor: 'green',
            height:50,
            marginTop:40,
            borderRadius:15,
            marginLeft:70
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20,textAlign:'center',marginTop:10}}>Save</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  addImage: {
    width: '50%',
    height: '20%',
    backgroundColor: 'gray',
    marginLeft: 100,
    borderRadius: 15
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    height: 30
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  button1: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    marginLeft: 23,
    width: '40%',
    height: '8%',
    borderRadius: 10,
    color: '#05375a',
  },

})
