import { createUseStyles } from 'react-jss';

export default createUseStyles(({ colors, breakpoints }) => ({
    map: {
        composes: 'Map',
        backgroundColor: colors.primary
    },
    header: {
        composes: 'Map__header',
        fontWeight: 700,
        fontSize: '1.3em',
        color: colors.accent
    },
    container: {
        composes: 'Map__container',
        maxWidth: '60em',
        margin: '0 auto',
        padding: '1.5em',
        display: 'flex',
        flexDirection: 'column',

        [breakpoints.sm]: {
            flexDirection: 'row',
            alignItems: 'center'
        }
    },
    left: {
        color: '#fff',

        [breakpoints.sm]: {
            width: '50%'
        }
    },
    right: {
        [breakpoints.sm]: {
            width: '50%',
            paddingLeft: '1em'
        }
    },
    address: {
        composes: 'Map__address',
        fontStyle: 'normal',
        marginTop: '2em',
        fontSize: '0.95em'
    },
    unitName: {
        color: colors.accent
    },
    mapFrame: {
        minHeight: '20em',

        margin: '2em -1.5em -1.5em',

        [breakpoints.sm]: {
            margin: '0'
        }
    }
}));
