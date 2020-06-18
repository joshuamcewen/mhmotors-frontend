import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './App.styles';
import { Footer, Hero, Map, Services, Socials } from '../../components';

const App = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.app}>
            <Hero />
            <Services />
            <Map />
            <Socials />
            <Footer />
        </div>
    );
};

export default App;
