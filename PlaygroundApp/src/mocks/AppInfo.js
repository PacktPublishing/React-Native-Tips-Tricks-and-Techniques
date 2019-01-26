// import { NativeModules } from 'react-native'
import {version as jsBuild} from '../../package.json'

// let NativeAppInfo = NativeModules.AppInfoManager

const AppInfo = {
    // BuildType: NativeAppInfo.BuildType,
    BuildType: 'Beta',

    JsBuild: jsBuild,

    // NativeBuild: NativeAppInfo.Build,
    NativeBuild: 1,

    Version: '1.2.0',

    DebugBuild: __DEV__,
}
export default AppInfo
