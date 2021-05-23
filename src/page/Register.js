import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import { UserAction } from '../redux/Action'

export class Register extends Component {
    
    constructor(props) {
        super(props)
    }

    handleInputData = () => {
        axios.post("http://192.168.43.215:8080/user/register/",this.props.dataRegister)
        .then((response)=>{
            alert(JSON.stringify(response.data));
            this.props.navigation.navigate("home")
        }).catch((err)=>{
            console.log(err)
        })
    }

    // getInitials = ()=>  {
    // var parts = this.props.UserAction("name").split(' ')
    // var initials = ''
    // for (var i = 0; i < parts.length; i++) {
    //     if (parts[i].length > 0 && parts[i] !== '') {
    //     initials += parts[i][0]
    //     }
    // }
    // return this.props.UserAction("initials", initials)
    // }

    render() {
        return (
            <View>
                <Text> Name </Text>
                <TextInput
                    style={styles.input}
                    placeholder="masukan nama"
                    onChangeText={(value) => { this.props.UserAction("name", value).toLowerCase() }}
                    // value={()=>{this.getInitials()}}
                />
                <Text> Email </Text>
                <TextInput
                    style={styles.input}
                    placeholder="masukkan email"
                    onChangeText={(value)=>{this.props.UserAction("email",value)}}
                />
                <Text> Password </Text>
                <TextInput
                    style={styles.input}
                    placeholder="masukkan password"
                    onChangeText={(value) => { this.props.UserAction("password", value) }}
                />
                <Text> Phone </Text>
                <TextInput
                    style={styles.input}
                    placeholder="masukkan telepon"
                    onChangeText={(value) => { this.props.UserAction("phone", value) }}
                    keyboardType="numeric"
                />
                <Text> Address </Text>
                <TextInput
                    style={styles.input}
                    placeholder="masukkan alamat"
                    onChangeText={(value)=>{this.props.UserAction("address",value)}}
                />
                <TouchableOpacity style={styles.button} onPress={()=>{this.handleInputData()}}><Text style={styles.text}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRegister: state.UserReducer,
})

const mapDispatchToProps = {
    UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

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