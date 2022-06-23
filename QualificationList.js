import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import QualificationCard from "./QualificationCard";
import moment from "moment";
import { getQualifications } from "./QualificationService";

class QualificationList extends Component {
  state = {
    qualifications: [],
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      getQualifications().then(qualifications => this.setState({ qualifications }));
    });

    setInterval(() => {
      this.setState({
        qualifications: this.state.qualifications.map(item => ({
          ...item,
          updateTime: Date.now()
        }))
      });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.listView}>
        <FlatList
          data={this.state.qualifications}
          renderItem={({ item }) => <QualificationCard item={item} />}
        ></FlatList>
        <Button
          onPress={() => this.props.navigation.navigate("QualificationForm")}
          title="Add"
        />
      </View>
    );
  }
}

export default QualificationList;

const styles = StyleSheet.create({
  listView: {
    paddingBottom: 40,
  },
});
