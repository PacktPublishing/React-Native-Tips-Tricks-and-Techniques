import AppInfo from './mocks/AppInfo'
import bugsnag from './mocks/bugsnag'
import SAClient from './mocks/sa'


const Reporter = {}

const logLevels = [
    'warn',
    'error',
    'info',
]

logLevels.forEach(lvl => {
    Reporter[lvl] = (msg, props) => {
        Reporter.loggers.forEach(logger => logger(lvl, msg, props))
    }
})

const staticMetadata = {
    buildType: AppInfo.BuildType,
    jsBuild: AppInfo.JsBuild,
    nativeBuild: AppInfo.NativeBuild,
    version: AppInfo.Version,
    debugBuild: AppInfo.DebugBuild,
}

Reporter.loggers = [
    // console
    (lvl, msg, props) => {
        console.log(`Console: ${lvl}`, msg, props)
    },
    
    // bugsnag
    (lvl, msg, props) => {
        if (__DEV__) return
            
        // map our level to bugsnag severity
        const severity = (() => {
            switch (lvl) {
            case 'info': return 'INFO'
            case 'warn': return 'WARNING'
            default:     return 'ERROR'
            }
        })()

        bugsnag.notify(new Error(msg), report => {
            report.severity = severity
            report.errorMessage = msg
            report.metadata = {
                _static: staticMetadata,
                event: props || {},
            }
            return report
        })
    },

    // some analytics
    (lvl, msg, props) => {
        if (__DEV__) return
        
        // map our level to some analytics function
        const fn = (() => {
            switch (lvl) {
            case 'info': return SAClient.info
            case 'warn': return SAClient.warn
            default:     return SAClient.error
            }
        })()

        fn(msg, props)
    }
]

export default Reporter
