import { createUseStyles } from 'react-jss';

export default createUseStyles(({ breakpoints, colors }) => ({
    services: {
        [breakpoints.sm]: {
            padding: '1em 0 3em',
            maxWidth: '60em',
            margin: '0 auto'
        }
    },
    serviceHeader: {
        display: 'none',

        [breakpoints.sm]: {
            display: 'block',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '1.8em',
            color: colors.headings,
            margin: '1.5em 0 1em'
        }
    },
    serviceCards: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1em',

        [breakpoints.sm]: {
            margin: '1em 0',
            alignItems: 'stretch',
            flexDirection: 'row'
        },

        '& .ServiceCard': {
            width: 'calc(100% - 4em)',
            margin: '0.5em',

            [breakpoints.sm]: {
                width: '33.3333%'
            }
        }
    }
}));
