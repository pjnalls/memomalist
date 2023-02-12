import Decks from "../components/Decks";
import Review from "../components/Review";
import { Text, View } from "../components/Themed";
import { styles } from "../shared/Tab.styles";
import { Card, Deck } from "../types";

export default function QueueTabScreen(deck: Deck) {
  const queue: Card[] = deck.cards.filter((card) => card.days <= 0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.name}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Review queue={queue} />
    </View>
  );
}
