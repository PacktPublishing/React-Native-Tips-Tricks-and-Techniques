import {AppRegistry} from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'

import StorybookUI from './storybook'


let app = App

if (process.env.SHOW_STORYBOOK != null) {
    app = StorybookUI
}

AppRegistry.registerComponent(appName, () => app)
