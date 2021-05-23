import React, { Component } from 'react'
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { LaporanAction } from '../redux/Action'
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import axios from 'axios'

export class Laporan extends Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        }
        }
    }

    getImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
        this.LaporanAction ({ image: result.uri });
        }
    }

    handleInputLaporan = () => {
        axios.post("http://192.168.43.215:8080/user/add/",this.props.dataLaporan)
        .then((response)=>{
            alert(JSON.stringify(response.data));
            this.props.navigation.navigate("main")
        }).catch((err)=>{
            console.log(err)
        })
    }

render() {
    let { image } = this.props.dataLaporan
        return (
            <View>
                <Text> Nama : </Text>
                <TextInput
                    style={styles.input}
                    placeholder="masukkan nama"
                    onChangeText={(value)=>{this.props.LaporanAction("name",value)}}
                />
                <Text> Kejadian : </Text>
                <TextInput
                    style={styles.input}
                    placeholder="masukkan kejadian"
                    onChangeText={(value)=>{this.props.LaporanAction("name",value)}}
                />
                <Picker
                    selectedValue={this.props.dataLaporan}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) => { this.setState({ dataLaporan : itemValue }) }}
                    >
                    <Picker.Item label="Pemerkosaan" value="Pemerkosaan" />
                    <Picker.Item label="Perampokan" value="Perampokan" />
                    <Picker.Item label="Bencana" value="Bencana" />
                    <Picker.Item label="Pembunuhan" value="Pembunuhan" />
                </Picker>
                <Text> Alamat : </Text>
                <TextInput
                    style={styles.input}
                    placeholder="masukkan alamat"
                    onChangeText={(value)=>{this.props.LaporanAction("address",value)}}
                />
                <Text> Keterangan : </Text>
                <TextInput
                    style={styles.input}
                    placeholder="masukkan keterangan"
                    onChangeText={(value)=>{this.props.LaporanAction("keterangan",value)}}
                />
                <Button
                    title="Pick an image from camera roll"
                    onPress={()=>{this.getImage()}}
                    />
                    {image &&
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <TouchableOpacity style={styles.button} onPress={()=>{this.handleInputLaporan()}}><Text style={styles.text}>LAPORKAN</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataLaporan : state.LaporanReducer,
})

const mapDispatchToProps = {
    LaporanAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Laporan)

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