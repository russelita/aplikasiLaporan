import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";

export class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.notificationList}
          data={this.state.infoData.daily}
          keyExtractor={(item) => {
            return item.dt + "";
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={[styles.card]}>
                <View style={styles.cardContent}>
                  <Image
                    style={[styles.image, styles.imageContent]}
                    source={{
                      uri:
                        "http://openweathermap.org/img/w/" +
                        item.weather[0].icon +
                        ".png",
                    }}
                  />

                  <Text style={styles.name}>{item.weather[0].description}</Text>
                  <Text style={styles.name}>
                    {new Date(item.dt * 1000).toLocaleDateString("en-US")}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    dataHistory: state.LaporanReducer,
});

const mapDispatchToProps = {
    LaporanAction
};

export default connect(mapStateToProps, mapDispatchToProps)(History);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
  formContent: {
    flexDirection: "row",
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  card: {
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    borderTopWidth: 40,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: "row",
    marginLeft: 10,
  },
  imageContent: {
    marginTop: -40,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: "wrap",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "center",
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: "#eee",
    marginTop: 5,
  },
});