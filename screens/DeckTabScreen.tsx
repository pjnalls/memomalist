import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { styles } from "../shared/Tab.styles";
import { RootTabScreenProps } from '../types';

export default function DeckTabScreen({ navigation }: RootTabScreenProps<'Deck'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/DeckTabScreen.tsx" />
    </View>
  );
}
