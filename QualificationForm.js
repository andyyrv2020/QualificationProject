import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from './util';
import { addQualification } from "./QualificationService";

class QualificationForm extends Component {
  state = {
    date: Date.now(),
    showDatePicker: false
  };

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

        <Button title="Add" onPress={
          () => {
            addQualification({
              date: formatDate(this.state.date),
              names: this.state.names,
              qname: this.state.qname,
              dates: this.state.dates,
              credits: this.state.credits,
            })
              .then(() => this.props.navigation.navigate('ThankYou'));
          }
        } />
      </View>
    );
  }
}
export default QualificationForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
