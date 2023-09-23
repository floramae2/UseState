import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Main = () => {
  const [main, setMain] = useState(true);
  const [flight, setFlight] = useState(false);
  const [counter, setCounter] = useState(false);

  const toFlight = () => {
    setMain(false);
    setFlight(true);
    setCounter(false);
  };

  const toCounter = () => {
    setMain(false);
    setFlight(false);
    setCounter(true);
  };

  const toMain = () => {
    setMain(true);
    setFlight(false);
    setCounter(false);
  };

  return (
    <View style={styles.heads}>
      <View style={styles.head}>
        {main && <Button title="FLASHLIGHT" onPress={toFlight} />}
        {main && <Button title="COUNTER" onPress={toCounter} />}
      </View>
      <View style={styles.body}>
        {flight && <Flight toMain={toMain} />}
        {counter && <Counter toMain={toMain} />}
      </View>
    </View>
  );
};

const Flight = ({ toMain }) => {
  const [image, setImage] = useState(false);
  const [text, setText] = useState("ON");

  const toImage = () => {
    setImage(!image);
    setText(text === 'ON' ? 'OFF' : 'ON');
  };

  return (
    <View style={styles.flightContainer}>
      {image && <Image
        source={require("./assets/FlashlightOn.png")}
        style={{ width: 150, height: 150, resizeMode: "stretch", marginVertical: 30 }}
      />}
      {!image && <Image
        source={require("./assets/FlashlightOff.png")}
        style={{ width: 150, height: 150, resizeMode: "stretch", marginVertical: 30 }}
      />}
      <View style={styles.buttonContainer}>
        <CustomButton title={text} onPress={toImage} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="BACK" onPress={toMain} color="green" />
      </View>
    </View>
  );
};

const Counter = ({ toMain }) => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.btnmain}>
        <Button
          title="-1"
          onPress={() => {
            setNumber(number - 1);
          }}
        />
        <Button
          title="+1"
          onPress={() => {
            setNumber(number + 1);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="BACK" onPress={toMain} color="green" />
      </View>
    </View>
  );
};

const CustomButton = ({ title, onPress }) => {
  const buttonColor = title === "OFF" ? "red" : "#007AFF";
  return (
    <Button title={title} onPress={onPress} color={buttonColor} />
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffafc9",
  },
  head: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    paddingVertical: 20,
  },
  heads: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 150,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  btnmain: {
    flexDirection: "row",
    gap: 20,
  },
  flightContainer: {
    alignItems: "center",
  },
  counterContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 50,
  },
});
