import { Platform } from 'react-native'

const primary = {
    base: Platform.select({ ios: 'Palatino', android: 'Droid-Serif' }),
    get regular() { return `${this.base}-Regular` },
    get bold()    { return `${this.base}-Bold`    },
    get italics() { return `${this.base}-Italics`   },
}

const secondary = {
    base: 'Helvetica',
    get regular() { return `${this.base}-Regular` },
    get bold()    { return `${this.base}-Bold`    },
    get light()   { return `${this.base}-Light`   },
    get medium()  { return `${this.base}-Medium`  },
}

const size = {
    veryBig:  30,
    big:      20,
    regular:  16,
    system:   14,
    small:    12,
    verySmall: 9,

    navBarTitle: 18,

    button: 18,
    buttonModal: 16,
    
    get inputFieldLabel() { return this.system },
}

export default {
    primary,
    secondary,
    size,
}
