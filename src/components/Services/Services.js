import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Services.styles';
import { ServiceCard } from '../../components';

const Services = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.services}>
            <h2 className={classes.serviceHeader}>Our Services</h2>
            <div className={classes.serviceCards}>
                <ServiceCard title="Repairs">
                    Our mechanics have a wealth of 30+ years experience in
                    repairing vehicles of all makes and models. If you think
                    there might something wrong with your vehicle, get in touch
                    and we can discuss your options.
                </ServiceCard>
                <ServiceCard title="Servicing">
                    We also offer servicing packages where we’ll give your
                    vehicle a full health check spanning your lights, tyres,
                    exhaust, brakes, transmission, oil and engine filters to
                    name just a few of the components we look at.
                </ServiceCard>
                <ServiceCard title="MOTs">
                    As an approved MOT station, we can check your vehicle for
                    roadworthiness, safety and environmental compliance. Give us
                    to book your vehicle in.
                </ServiceCard>
            </div>
        </div>
    );
};

export default Services;
