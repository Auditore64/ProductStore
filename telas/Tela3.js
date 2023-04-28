import { Button, StyleSheet, Text, View } from "react-native";

const Tela3 = () => {
    return (
        <View>
            <Text
                style={styles.texto}
            >
                Terceira Tela
            </Text>

            <Button
                color={'green'}
                title="Tela 3"
                onPress={() =>
                    navigation.navigate('Tela1', { name: 'Tela 1' })
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
export default Tela3;