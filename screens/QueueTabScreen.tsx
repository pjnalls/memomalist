import Review from "../components/Review";
import { Text, View } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import { TabBarIcon } from "../shared/TabBarIcon.util";
import { styles } from "../shared/Tab.styles";
import { Card, Deck } from "../types";
import Colors from "../constants/Colors";

export default function QueueTabScreen(deck: Deck) {
  const colorScheme = useColorScheme();
  const queue: Card[] = deck.cards.filter((card) => card.days <= 0);
  return (
    <View style={styles.container}>
      <TabBarIcon
        name="sticky-note"
        color={Colors[colorScheme].tabIconSelected}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Text
        style={styles.title}
        lightColor="rgba(0,0,0,1)"
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
        lightColor="rgba(0,0,0,0)"
        darkColor="rgba(255,255,255,0)"
      >
        {deck.description}
      </Text>
      <Review queue={queue} />
    </View>
  );
}
