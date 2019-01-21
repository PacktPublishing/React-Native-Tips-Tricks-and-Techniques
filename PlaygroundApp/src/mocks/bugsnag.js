const bugsnag = {
    notify: (error, repFn) => {
        const report = repFn({})
        console.log(`Bugsnag: ${report.severity}`, report.errorMessage, report.metadata)
    },
}
export default bugsnag
