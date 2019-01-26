import AppInfo from 'mocks/AppInfo'

const dev  = (AppInfo.BuildType === 'Dev')
const beta = (AppInfo.BuildType === 'Beta')
const prod = (AppInfo.BuildType === 'Production')

const FeatureToggles = {
    // feature:     dev || beta || prod || false,
    showLog:        dev || beta         || false,
    newFeature:     dev                 || false,
    crashReporting:        beta || prod || false,
    reactotron:     dev                 || false,
    oldFeature:                            false,
}

export default FeatureToggles
