import { Button, StyleSheet, Text, View } from "react-native";

const TelaHome = ({ navigation }) => {
    return (
        <View>

            <Text
                style={styles.texto}
            >
                Tela Home
            </Text>

            {/*
            <Button
                color={'green'}
                title="Tela de contatos"
                onPress={() =>
                    navigation.navigate('TelaContato', { name: 'Tela de Contato' })
                }
            /> */}
            
          <View
                style={styles.separador}
            >
                <Button
                    color={'green'}
                    title="Tela1"
                    onPress={() =>
                        navigation.navigate('Tela1', { name: 'Tela 1' })
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

        </View >
    );
}

const styles = StyleSheet.create({
    texto: {
        color: 'black',
        fontSize: 30,
        marginBottom: 15,
    },
    separador: {
        marginBottom: 30,
    },
});

export default TelaHome;