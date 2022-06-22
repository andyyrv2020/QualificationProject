import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { formatDate, getCountdownParts } from "./util";
import { deleteQualification } from "./QualificationService";
import * as RootNavigation from "./RootNavigation";

export default function QualificationCard({ qualificationItem }) {
  const countdown = getCountdownParts(qualificationItem.date);

  return (
    <View style={styles.qualificationCard}>
      <View style={styles.qualificationCardHeader}>
        <Text style={styles.title}>{qualificationItem.title}</Text>
        <Text style={styles.date}>{formatDate(qualificationItem.date)}</Text>
      </View>
      <Text style={styles.description}>{qualificationItem.description}</Text>
      <View style={styles.counterContainer}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.days}</Text>
          <Text style={styles.counterLabel}>Days</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.hours}</Text>
          <Text style={styles.counterLabel}>Hours</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.minutes}</Text>
          <Text style={styles.counterLabel}>Minutes</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.seconds}</Text>
          <Text style={styles.counterLabel}>Seconds</Text>
        </View>
      </View>
      <View style={styles.mt10}>
        <Button
          onPress={() =>
            RootNavigation.navigate("QualificationEditForm", {
              id: qualificationItem._id,
            })
          }
          title="Edit qualification"
        />
      </View>
      <View style={styles.mt10}>
        <Button
          onPress={() => {
            //TODO: use Alert.alert from react native on phone
            deleteQualification(qualificationItem._id);
            RootNavigation.navigate("QualificationDeleted", {});
          }}
          title="Delete qualification"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  qualificationCard: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#04b032",
    width: "100%",
  },
  qualificationCardHeader: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    fontSize: 38,
    color: "#fff",
    textAlign: "left",
    flexBasis: "80%",
  },
  date: {
    textAlign: "right",
    flexBasis: "20%",
    fontSize: 38,
    color: "#ffffff",
  },
  description: {
    fontSize: 24,
    marginTop: 16,
    color: "#fff",
  },
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%", //padding отляво и отдясно
    marginTop: 30,
  },
  counter: {
    flexBasis: "25%",
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
  mt10: {
    marginTop: 10,
  },
});
