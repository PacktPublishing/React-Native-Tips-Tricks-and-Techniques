import Reactotron from 'reactotron-react-native'

export const setupReactotron = () => {
  Reactotron
    .configure()
    .useReactNative()
    .connect()
    .clear()

  console.log = Reactotron.log
  console.r = Reactotron
}
