import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimension } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { MapAction } from '../redux/Action'

export class Map extends Component {
    
    constructor(props) {
        super(props)
    }

    // AIzaSyARzAn_k2ql7Sji0WNObzqs_5Z7pi9Q8Ck
//       <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARzAn_k2ql7Sji0WNObzqs_5Z7pi9Q8Ck&callback=initMap"
//   type="text/javascript"></script>

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    region={this.props.dataMap}
                    onRegionChange={this.props.MapAction}
                    >
                    {this.state.markers.map((marker, index) => (
                        <Marker
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                        />
                    ))}
                </MapView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataMap : state.MapReducer
})

const mapDispatchToProps = {
    MapAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});