import { createUseStyles } from 'react-jss';

export default createUseStyles({
    '@global': {
        'html, #root': {
            height: '100%'
        },
        body: {
            fontFamily: 'Inter, sans-serif',
            margin: '0',
            padding: '0',
            fontSize: '16px',
            height: '100%'
        },
        'h1, h2, h3': {
            fontWeight: '600'
        }
    },
    container: {
        maxWidth: '32em',
        padding: '2em',
        margin: '0 auto',
        height: 'calc(100% - 4em)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
