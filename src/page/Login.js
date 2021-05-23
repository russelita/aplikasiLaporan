import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { UserAction } from '../redux/Action'
import axios from 'axios'

export class Login extends Component {
    
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
                <TouchableOpacity style={styles.button} onPress={()=>{this.handleLogin()}}><Text style={styles.text}>Submit</Text></TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    button:{
        padding:20,
    },
    text:{
        textAlign:'center',
        borderWidth:5,
    }
  })