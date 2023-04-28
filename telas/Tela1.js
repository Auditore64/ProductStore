import { Button, StyleSheet, Text, View, VirtualizedList } from "react-native";
import Tela2 from "./Tela2";
import Tela3 from "./Tela3";
const Tela1 = ({navigation}) => {
    return (
        <View>
            <Text
                style={styles.texto}
            >
                Tela Principal
            </Text>

            <View
                style={styles.separador}
            >
                <Button
                    color={'green'}
                    title="Tela2"
                    onPress={() =>
                        navigation.navigate('Tela2', { name: 'Tela 2' })
                    }
                />
            </View>
            <View
                style={styles.separador}

            >
                <Button
                    color={'green'}
                    title="Tela3"
                    onPress={() =>
                        navigation.navigate('Tela3', { name: 'Tela 3' })
                    }
                />

            </View>

            <View
                style={styles.separador}

            >
                <Button
                    color={'green'}
                    title="Tela2"
                    onPress={() =>
                        navigation.navigate('Tela3', { name: 'Tela 3' })
                    }
                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    separador: {
        marginBottom: 30,
    },
    texto: {
        color: 'black',
        fontSize: 30,
        marginBottom: 15,
    }
});

export default Tela1;