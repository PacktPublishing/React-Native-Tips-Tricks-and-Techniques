import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'

import InputButton from '../components/InputButton'
import withLongPressZoom from '../components/withLongPressZoom'
import withOutline from '../components/withOutline'

const InputButtonZoom = withLongPressZoom(InputButton)
const InputButtonOutline = withOutline({color: 'green', radius: 40})(InputButton)


const buttonsBottomUp = [
    [7,  8 ,  9 , '/'],
    [4,  5 ,  6 , '*'],
    [1,  2 ,  3 , '-'],
    [0, '.', '=', '+'],
    ['flip'],
] 

const buttonsTopDown = [
    [1,  2 ,  3 , '/'],
    [4,  5 ,  6 , '*'],
    [7,  8 ,  9 , '-'],
    [0, '.', '=', '+'],
    ['flip'],
] 

export default
class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            numbersBottomUp: true,
        }
    }

    buttonPressed = value => {
        switch (value) {
        case 'flip':
            this.setState({ numbersBottomUp: !this.state.numbersBottomUp })
            return
        }
    }

    render() {
        const buttons = this.state.numbersBottomUp
            ? buttonsBottomUp
            : buttonsTopDown

        return (
            <SafeAreaView style={styles.container}>
                {buttons.map((line, index) => (
                    <View key={`${index}`} style={styles.line}>
                        {line.map(value => (
                            <InputButtonOutline
                                key={`${value}`}
                                value={value}
                                inverted={typeof value === 'string'}
                                onPress={() => this.buttonPressed(value)}
                                onLongPress={() => console.log('looong')}
                            />
                        ))}
                    </View>
                ))}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '75%',
        bottom: 0,
        borderWidth: 1,
        borderColor: 'red',
    },
    line: {
        borderWidth: 2,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})
