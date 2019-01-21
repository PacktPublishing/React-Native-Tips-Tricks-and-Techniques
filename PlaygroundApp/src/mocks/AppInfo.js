// import { NativeModules } from 'react-native'
import {version as jsBuild} from './app.json'

// let NativeAppInfo = NativeModules.AppInfoManager

const AppInfo = {
    BuildType: AppInfo.BuildType,
    
    JsBuild: jsBuild,
    
    // NativeBuild: NativeAppInfo.Build,
    NativeBuild: 1,

    Version: '1.2.0',

    DebugBuild: __DEV__,
}
export default AppInfo
