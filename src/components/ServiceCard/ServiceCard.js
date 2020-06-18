import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import useStyles from './ServiceCard.styles';

const ServiceCard = ({ title, children }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.card}>
            <h2 className={classes.heading}>{title}</h2>
            <div className={classes.contents}>{children}</div>
        </div>
    );
};

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
};

export default ServiceCard;
