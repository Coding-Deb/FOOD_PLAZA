import { ActivityIndicator, Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import axios from 'axios'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const [loading, setloading] = useState(false)

  const Submit = () => {
    const data = { name, email, password }
    if (name.length < 10 && password && email) {
      axios.post('http://192.168.105.210:5000/api/login', data)
        .then((data) => console.log('1 Data received'))
        setloading(true)
        setTimeout(() => {
        navigation.navigate('Home', { Name: name })
      }, 3000);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
          <Image
            source={require('../assets/Food2.jpg')}
            style={{ height: 80, width: 80, borderRadius: 30, marginRight: 10 }}
          />
          <Text style={{ fontSize: 40, fontWeight: '800', color: 'white', marginLeft: 10 }}>
            Food Plaza
          </Text>
        </View>
        <View style={{ backgroundColor: 'white', height: 1 / 1.5 * height, width: width - 30, alignItems: 'center', justifyContent: 'space-around', borderRadius: 30 }}>
          <Text style={{ fontSize: 30, fontWeight: '600', color: '#EC5800', }}>
            Log In
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <Feather name="user" size={30} color={(!name) ? 'black' : '#EC5800'} style={{ top: 8 }} />
            <TextInput
              style={{ height: 50, width: width - 120, borderBottomColor: 'black', borderBottomWidth: 2, padding: 12, fontSize: 20, fontWeight: '600', marginRight: 25 }}
              placeholder='Enter Name'
              value={name}
              onChangeText={(val) => { setname(val) }}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="email-outline" size={30} color={(!email) ? 'black' : '#EC5800'} style={{ top: 8, }} />
            <TextInput
              style={{ height: 50, width: width - 120, borderBottomColor: 'black', borderBottomWidth: 2, padding: 12, fontSize: 20, fontWeight: '600', marginRight: 25 }}
              placeholder='Enter Email'
              value={email}
              onChangeText={(val) => { setemail(val) }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Feather name="lock" size={30} color={(!password) ? 'black' : '#EC5800'} style={{ top: 8, }} />
            <TextInput
              style={{ height: 50, width: width - 120, borderBottomColor: 'black', borderBottomWidth: 2, padding: 12, fontSize: 20, fontWeight: '600' }}
              placeholder='Enter Password'
              value={password}
              onChangeText={(val) => { setpassword(val) }}
            />
            <Ionicons name="eye-outline" size={30} color='#EC5800' style={{ top: 8, }} />
          </View>
          <TouchableOpacity style={{ height: 60, width: 1 / 2 * width, backgroundColor: '#EC5800', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }} onPress={Submit}>
            {/* <Text style={{ color: 'white', fontSize: 22, fontWeight: '600' }}>
              Log In
            </Text> */}
            {
              loading ?
                <View>
                  <ActivityIndicator size={40} color='#088F8F' />
                </View>
                :
                <Text style={{ color: 'white', fontSize: 22, fontWeight: '600' }}>
                  Log In
                </Text>
            }
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: width - 30 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>
              Not Any Account ?
            </Text>
            <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }}>
              <Text style={{ color: '#EC5800', fontSize: 18, fontWeight: '600', marginLeft: 10 }}>
                Sign_In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC5800',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
})