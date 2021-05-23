import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Main extends Component {
    
    constructor(props) {
        super(props)
    }

    handleClick() {
            let counter = 0;
            counter++;
            if (counter===3){
                //Do your thing
                this.props.navigate("laporan")
        }
        return "Anda Berhasil Menekan Tombol"
        }


    render() {
        return (
            <View>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("laporan") }}><Text style={styles.text}>Laporan</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("history") }}><Text style={styles.text}>History Laporan</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("map") }}><Text style={styles.text}>Map Kejadian</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.replace("home") }}><Text style={styles.text}>Logout</Text></TouchableOpacity>
                <View style={[styles.btnContainerMiddle, { justifyContent: 'center' }]}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            { height: 200, width: 200, borderRadius: 50, margin: 10 },
                        ]}>
                        {/* <i class="fas fa-exclamation-circle"></i> */}
                        <Icon
                            name='exclamation-circle'
                            type='font-awesome'
                            color='#f50'
                            onPress={() => handleClick()} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    button:{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#ccc',
    },
    text:{
        textAlign:'center',
        borderWidth:5,
    }
  })