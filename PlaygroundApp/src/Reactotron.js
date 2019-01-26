import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

import FeatureToggles from 'FeatureToggles'


let reactotron = null
if (FeatureToggles.reactotron) {
    reactotron = Reactotron
        .configure()
        .use(reactotronRedux())
        .useReactNative()
        .connect()

    console.log = reactotron.log
    console.r = reactotron

    reactotron.clear()
}
export default reactotron
