import * as WebBrowser from "expo-web-browser";
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
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Current Deck:
        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {deck.name}
        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {deck.description}
        </Text>
      </View>
      {decks.map((d, index) => (
        <View key={`dexk-${d._id}-${index}`} style={styles.helpContainer}>
          <TouchableOpacity
            onPress={() => handleDeckSelect(d, setDeck)}
            style={styles.helpLink}
          >
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              {d.name}
            </Text>
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
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
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
