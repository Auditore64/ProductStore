import { View, Text, TextInput, Button, Switch, Component } from "react-native";
import React from "react";
import SelectDropdown from 'react-native-select-dropdown';

class FormClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            casado: false,
            titulacao: '',
            enviar: false,
            titulacoes: ['Graduado', 'Especialista', 'Mestre', 'Doutor']
        };
    }

    setNome(nome) {
        this.setState({
            nome: nome
        });
    }

    setEnviar(state) {
        this.setState({
            enviar: !state.enviar
        });
    }

    setCasado(casado) {
        this.setState({
            casado: casado
        });
    }

    setTitulacao(titulacao) {
        this.setState({
            titulacao: titulacao
        })
    }

    render() {
        return (
            <View style={{ padding: 10, }}>
                <Text
                    style={{
                        color: "white",
                        fontSize: 25,
                        padding: 10,
                    }}
                >Cadastro</Text>

                <Text
                    style={{
                        padding: 10,
                        color: "white",
                        fontSize: 25,
                    }}
                >Nome:</Text>

                <TextInput
                    style={{
                        height: 40,
                        borderWidth: 1,
                        padding: 10,
                        fontSize: 20,
                        borderColor: "white",
                        borderRadius: 5,
                        marginBottom: 10,
                    }}

                    placeholder="Digite o seu nome"
                    defaultValue={this.state.nome}
                    onChangeText={this.setNome.bind(this)}
                />

                <Text
                    style={{
                        padding: 10,
                        color: "white",
                        fontSize: 25,
                    }}
                >Casado:</Text>

                <Switch
                    style={{ marginBottom: 10, }}
                    onValueChange={this.setCasado.bind(this)}
                    value={this.state.casado}
                />
                <Text>Titulação</Text>

                <SelectDropdown
                style={{
                    marginBottom:10,
                }}
                    data={this.state.titulacoes}
                    onSelect={this.setTitulacao.bind(this)}
                />

                <Button
                    title="Enviar"
                    onPress={(this.setEnviar.bind(this))}
                />

                {this.state.enviar &&
                    <View>
                        <Text
                            style={{
                                padding: 10,
                                color: "lightblue",
                                fontSize: 25,
                            }}
                        >Nome: {this.state.nome}</Text>

                        <Text
                            style={{
                                padding: 10,
                                color: "lightblue",
                                fontSize: 25,
                            }}
                        >Casado: {this.state.casado ? 'sim' : 'não'}</Text>

                        <Text
                            style={{
                                padding: 10,
                                color: "lightblue",
                                fontSize: 25,
                            }}
                        >Titulação: {this.state.titulacao}</Text>
                    </View>
                }
            </View>
        )
    }
}

export default FormClass;