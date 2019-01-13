// HOCs

// Should:
// Pass on unneeded props
// Change the displayName
// Hoist static methods `hoist-non-react-statics`

// Can:
// Have extra state
// Manipulate props before passing on
// Be as simple as logging props/information

import React from 'react'
import { getDisplayName } from '../utils'
import hoistNonReactStatic from 'hoist-non-react-statics'

const ourHOC = Component => {
    class OurHOC extends React.Component {
        render() {
            return <Component {...this.props} />
        }
    }
    OurHOC.displayName = `OurHOC(${getDisplayName(Component)})`
    hoistNonReactStatic(OurHOC, Component)
    return OurHOC
}

const logProps = Component => {
    class LogProps extends React.Component {
        componentWillReceiveProps(nextProps) {
            console.log('Current props:', this.props)
            console.log('Next props:', nextProps)
        }

        render() {
            return <Component {...this.props} />
        }
    }
    LogProps.displayName = `LogProps(${getDisplayName(Component)})`
    hoistNonReactStatic(LogProps, Component)
    return LogProps
}
export {
    logProps,
}

export default ourHOC

