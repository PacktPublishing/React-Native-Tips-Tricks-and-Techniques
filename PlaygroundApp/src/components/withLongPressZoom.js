import React from 'react'
import { StyleSheet } from 'react-native'


/**
 * Override a function if it's defined, and do some extra work.
 * Return the original otherwise.
 */
const functionOverride = (originalFn, extraWork) => {
    if (originalFn == null) {
        return originalFn
    }

    const overrideFn = () => {
        extraWork()
        originalFn()
    }
    return overrideFn
}

const withLongPressZoom = Component => {
    return class WithLongPressZoom extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                pressed: false,
            }
        }

        onLongPressWork = () => {
            this.setState({ pressed: true })
            setTimeout(() => this.setState({ pressed: false}), 400)
        }

        render() {
            const { onLongPress, style, ...rest } = this.props
            const newOnLongPress = functionOverride(onLongPress, this.onLongPressWork)
            
            const zoomStyle = this.state.pressed ? styles.zoom : undefined

            console.log(this.state.pressed)
            return (
                <Component
                    {...rest}
                    onLongPress={newOnLongPress}
                    style={[style, zoomStyle]}
                />
            )
        }
    }
}
export default withLongPressZoom

const styles = StyleSheet.create({
    zoom: {
        transform: [
            { scaleX: 2 },
            { scaleY: 2 },
        ],
    },
})
