import React from "react";
import { ScrollView } from "react-native";
import Decks from "../components/Decks";
import { Text, View } from "../components/Themed";
import { decks } from "../data/Deck.data";
import useColorScheme from "../hooks/useColorScheme";
import { styles } from "../shared/Tab.styles";
import { Deck } from "../types";

export default function DeckTabScreen(deck: Deck, setDeck: any) {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Decks</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

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
      <ScrollView>
        <Decks deck={deck} decks={decks} setDeck={setDeck} />
      </ScrollView>
    </View>
  );
}
