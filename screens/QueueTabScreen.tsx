import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { styles } from "../shared/Tab.styles";

export default function QueueTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/QueueTabScreen.tsx" />
    </View>
  );
}
