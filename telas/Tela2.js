
import { Button, StyleSheet, Text, View } from "react-native";


const Tela2 = () => {
    return (
        <View>
            <Text
                style={styles.texto}
            >
                Segunda Tela
            </Text>

            <Button
                color={'green'}
                title="Tela3"
                onPress={() =>
                    navigation.navigate('Tela3', { name: 'Tela 3' })
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        color: 'black',
        fontSize: 30,
        marginBottom: 15,
    }
});

export default Tela2;