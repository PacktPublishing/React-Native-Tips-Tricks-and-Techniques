import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'


let reactotron = null
if (__DEV__) {
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
