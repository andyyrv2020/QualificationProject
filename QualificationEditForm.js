import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from "./util";

import { editQualification, getQualificationById } from "./QualificationService";

class QualificationEditForm extends Component {
  state = {
    date: Date.now(),
    showDatePicker: false,
  };

  componentDidMount() {
    const qualificationId = this.props.route.params["id"];
    getQualificationById(qualificationId)
      .then(item => {
        this.setState({
          id: item._id,
          names: item.names,
          qname: item.qname,
          dates: item.dates,
          credits: item.credits
        })
      })
  }

  handleChangeNames = (value) => {
    this.setState({ names: value });
  };

  handleChangeQname = (value) => {
    this.setState({ qname: value });
  };

  handleChangeDates = (value) => {
    this.setState({ dates: value });
  };

  handleChangeCredits = (value) => {
    this.setState({ credits: value });
  };




  handleDatePress = () => {
    this.setState({ showDatePicker: true });
  };
  handleDatePickerHide = () => {
    this.setState({ showDatePicker: false });
  };
  handleDatePicked = (qualification, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({ date: currentDate });
    this.handleDatePickerHide();
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Employee"
          value={this.state.names}
          onChangeText={this.handleChangeNames}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Qualification"
          value={this.state.qname}
          onChangeText={this.handleChangeQname}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Graduation"
          value={this.state.dates}
          onChangeText={this.handleChangeDates}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Credits"
          value={this.state.credits}
          onChangeText={this.handleChangeCredits}
        />

        {this.state.showDatePicker && (
          <DateTimePicker
            value={this.state.date}
            mode="datetime"
            is24Hour={true}
            onChange={this.handleDatePicked}
          />
        )}

        <TextInput
          style={styles.textInput}
          placeholder="Qualification date"
          value={formatDate(this.state.date)}
          editable={!this.state.showDatePicker}
          onFocus={this.handleDatePress}
        />

        <Button title="Редактирай" onPress={
          () => {
            editQualification({
              date: formatDate(this.state.date),
              id: this.state.id,
              names: this.state.names,
              qname: this.state.qname,
              dates: this.state.dates,
              credits: this.state.credits

            })
              .then(() => this.props.navigation.goBack());
          }
        } />
      </View>
    );
  }
}
export default QualificationEditForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
