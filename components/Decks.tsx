import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { Deck } from "../types";
import { Text, View } from "./Themed";

export default function Decks({
  deck,
  decks,
  setDeck,
}: {
  deck: Deck;
  decks: Deck[];
  setDeck: any;
}) {
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={styles.title}
          lightColor="rgba(0,0,0,0)"
          darkColor="rgba(255,255,255,1)"
        >
          {deck.name}
        </Text>
        <View
          style={styles.smSeparator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text
          style={styles.text}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {deck.description}
        </Text>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {decks.map((d, index) => (
        <View key={`dexk-${d._id}-${index}`} style={styles.helpContainer}>
          <TouchableOpacity
            onPress={() => handleDeckSelect(d, setDeck)}
            style={styles.helpLink}
          >
            <Text style={styles.itemTitle} lightColor={Colors.light.tint}>
              {d.name}
            </Text>
            <Text
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"
            >
              {d.description}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

function handleDeckSelect(deck: Deck, setDeck: any) {
  setDeck(() => ({ ...deck }));
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  text: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  title: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "500",
  },
  itemTitle: {
    fontWeight: "500",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  smSeparator: {
    marginVertical: 6.67,
    height: 1,
    width: "80%",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
});
