import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home() {
  return (
    <View style={styles.tabsBottom}>
        <View style={styles.tabItem}>
            <Icon name="home-outline" size={30} color="#000" style={styles.tabIcon} />
            <Text style={styles.tabText}>Home</Text>
        </View>
        <View style={styles.tabItem}>
            <Icon name="football-outline" size={30} color="#000" style={styles.tabIcon} />
            <Text style={styles.tabText}>Matchs</Text>
        </View>
        <View style={styles.tabItem}>
            <Icon name="home" size={30} color="#000" style={styles.tabIcon} />
            <Text style={styles.tabText}>Home</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    tabsBottom:{
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        backgroundColor: "white",
        position: "absolute",
        width: "100%",
        bottom: 0
    },
    tabItem:{
        width: "33.33%",
        textAlign: "center"
    },
    tabIcon:{
        textAlign: "center"
    },
    tabText:{
        width: "100%",
        textAlign: "center"
    }
})
