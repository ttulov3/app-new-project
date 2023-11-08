import React, { Component } from 'react'
import { Text, TextInput } from 'react-native'
import estilo from '../../estilo'

export default class Mega extends Component {
    state = {
        qtdNumero: this.props.qtdNumero
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdNumero: qtde })
    }

    render() {
        return (
            <>
                <Text style={estilo.fontG}>
                    Gerador de Mega-sena
                    {this.state.qtdNumero}
                </Text>

                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="qtde de Números"
                    value={this.alterarQtdeNumero}
                />
            </>
        )

    }

}