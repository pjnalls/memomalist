import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
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
  const colorScheme = useColorScheme();
  useEffect(() => setDeck(() => ({ ...deck })), [setDeck]);

  return (
    <View>
      <View style={styles.container}></View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {decks.map((d, index) => (
        <View key={`deck-${d._id}-${index}`} style={styles.helpContainer}>
          <View style={{ marginRight: 17 }}>
            <TouchableOpacity onPress={() => handleDeckSelect(d, setDeck)}>
              <TabBarIcon
                name="sticky-note"
                color={
                  deck._id === index
                    ? Colors[colorScheme].tabIconSelected
                    : Colors[colorScheme].tabIconDefault
                }
              />
            </TouchableOpacity>
          </View>

          <View>
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
  helpContainer: {
    flexDirection: "row",
    width: "90%",
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
});

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
