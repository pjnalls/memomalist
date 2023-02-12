import Decks from "../components/Decks";
import { Text, View } from "../components/Themed";
import { decks } from "../data/Deck.data";
import { styles } from "../shared/Tab.styles";
import { Deck } from "../types";

export default function DeckTabScreen(deck: Deck, setDeck: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Decks</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Decks deck={deck} decks={decks} setDeck={setDeck} />
    </View>
  );
}
