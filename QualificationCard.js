import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { formatDate, getCountdownParts } from "./util";
import { deleteQualification } from "./QualificationService";
import * as RootNavigation from "./RootNavigation";

export default function QualificationCard({ item }) {
  const countdown = getCountdownParts(item.date);



  return (
    <View style={styles.qualificationCard}>

      <Text style={styles.employee}>Employee:</Text>
      <Text style={styles.names}>{item.names}</Text>

      <Text style={styles.qualification}>Qualification:</Text>
      <Text style={styles.qname}>{item.qname}</Text>

      <Text style={styles.graduation}>Graduation:</Text>
      <Text style={styles.dates}>{item.dates}</Text>

      <Text style={styles.credits}>Credits:</Text>
      <Text style={styles.creditsstyle}>{item.credits}</Text>

      <Text style={styles.created}>Created on:</Text>
      <Text style={styles.date}>{formatDate(item.date)}</Text>

      <View style={styles.edit}>
        <Button
          onPress={() =>
            RootNavigation.navigate("QualificationEditForm", {
              id: item._id,
            })
          }
          title="Edit"
        />
      </View>
      <View style={styles.delete}>
        <Button
          onPress={() => {
            deleteQualification(item._id);
            RootNavigation.navigate("QualificationDeleted", {});
          }}
          title="Delete"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  qualificationCard: {
    borderColor: "#787878",
    borderWidth: 3,
    borderStyle: "dashed",
    margin: 15,
    padding: 15,
    display: 'flex',
    alignItems: 'left',
    //justifyContent: 'left',
    backgroundColor: "#424242",
    width: "30%",
  },
  names: { //right
    flex: 1,
    fontSize: 25,
    color: "#fff",
    position: "relative",
    top: "-8px",
    width: "100%",
    textAlign: "right",

  },

  dates: { //right
    flex: 1,
    fontSize: 25,
    color: "#fff",
    position: "relative",
    top: "-8px",
    width: "100%",
    textAlign: "right",

  },

  creditsstyle: { //right
    flex: 1,
    fontSize: 25,
    color: "#fff",
    position: "relative",
    top: "-8px",
    width: "100%",
    textAlign: "right",

  },

  date: { //right
    flex: 1,
    fontSize: 25,
    color: "#fff",
    position: "relative",
    top: "-8px",
    width: "100%",
    textAlign: "right",

  },

  qname: { //right
    flex: 1,
    fontSize: 25,
    color: "#fff",
    position: "relative",
    top: "-8px",
    width: "100%",
    textAlign: "right",

  },

  qualification: { // left
    flex: 1,
    fontSize: 25,
    color: "#fff",
    marginBottom: "-25px",
    position: "relative",
    width: "100%",
    textAlign: "left",

  },

  created: { // left
    flex: 1,
    fontSize: 25,
    color: "#fff",
    marginBottom: "-25px",
    position: "relative",
    width: "100%",
    textAlign: "left",

  },

  graduation: { // left
    flex: 1,
    fontSize: 25,
    color: "#fff",
    marginBottom: "-25px",
    position: "relative",
    width: "35%",
    textAlign: "left",
    flexBasis: "100%",
  },

  credits: { // left
    flex: 1,
    fontSize: 25,
    color: "#fff",
    marginBottom: "-25px",
    position: "relative",
    width: "35%",
    textAlign: "left",
    flexBasis: "100%",
  },

  employee: { // left
    flex: 1,
    fontSize: 25,
    color: "#fff",
    marginBottom: "-25px",
    position: "relative",
    width: "35%",
    textAlign: "left",
    flexBasis: "100%",
  },

  employee: { // left
    flex: 1,
    fontSize: 25,
    color: "#fff",
    marginBottom: "-25px",
    position: "relative",
    width: "35%",
    textAlign: "left",
    flexBasis: "100%",
  },

  qualificationCardHeader: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: "#fff",
    float: "left",
    width: "50%",
    textAlign: "row",
    flexBasis: "100%",
  },

  description: { //information
    flex: 1,
    fontSize: 10,
    color: "#fff",
    float: "left",
    width: "50%",
    textAlign: "center",
    flexBasis: "100%",
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    marginTop: 30,
  },
  counter: {
    flexBasis: "20%",
  },
  counterText: {
    fontSize: 40,
    textAlign: "center",
    color: "#fff",
  },
  counterLabel: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
  },
  edit: {
    margin: "1px",
    width: "70px",
    height: "55px",
    position: "relative",
    bottom: "-10px",
  },

  delete: {
    margin: "1px",
    left: "320px",
    width: "70px",
    color: "#474747",
    height: "55px",
    position: "absolute",
    bottom: "5px",
  },

});
