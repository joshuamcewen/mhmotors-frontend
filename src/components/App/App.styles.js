import { createUseStyles } from 'react-jss';

export default createUseStyles(() => ({
    '@global': {
        'html, #root': {
            height: '100%'
        },
        body: {
            fontFamily: 'Muli, sans-serif',
            margin: '0',
            padding: '0',
            fontSize: '16px',
            height: '100%'
        },
        'h1, h2, h3': {
            fontWeight: '600'
        }
    }
}));
