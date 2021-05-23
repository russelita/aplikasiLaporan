import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Avatar } from 'react-native-elements';
import { UserAction } from '../redux/Action'
import axios from 'axios'

export class Home extends Component {
    
    constructor(props) {
        super(props)
    }

    handleLogin(){
        axios.get(`http://192.168.43.215:8080/user/password/${this.props.dataName}`)
        .then((response)=>{
            alert("Kamu berhasil Login Horeee " + response.data.name)
            this.props.UserAction("id",response.data.id)
            this.props.UserAction("name",response.data.name)
            this.props.UserAction("email",response.data.email)
            this.props.UserAction("phone",response.data.phone)
            this.props.UserAction("address",response.data.address)
            this.props.UserAction("isLogin",true)

            this.props.navigation.navigate("main")
        })
        .catch((err)=>{
            console.log("PASSWORD SALAH CUY"+err)
        })
    }

    render() {
        return (
            <View>
                <Avatar
                    size={200}
                    rounded
                    icon={{name: 'user', type: 'font-awesome'}}
                    activeOpacity={0.7}
                    containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
                />
                    <Text> Nama </Text> 
                    <TextInput
                        style={styles.input}
                        placeholder="Nama"
                        onChangeText={(value)=>{this.props.UserAction("name",value).toLowerCase()}}
                    />
                    <Text> Password </Text> 
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={(value)=>{this.props.UserAction("password",value)}}
                    />
                    <TouchableOpacity style={styles.button} onPress={()=>{this.handleLogin()}}><Text style={styles.text}>Login</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("register")}}><Text style={styles.text}>Registrasi</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataName : state.UserReducer
})

const mapDispatchToProps = {
    UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    button:{
        padding:10,
    },
    text:{
        textAlign:'center',
        borderWidth:5,
    }
  })