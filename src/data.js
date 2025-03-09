/* Import images from assets folder */
import lakesImg from './assets/lakes-logo.png';
import paddleboardimg from './assets/paddleboard.png';
import weatherLogo from './assets/weather-logo.png';

/* Array with objects with one lake information object that should be outputted */
export const LAKES_INFO = [
    {
    image: lakesImg,
    title: 'Lakes',
    description: 'Names of Lakes and Rivers I have travelled on.'
    },
    {
    image: paddleboardimg,
    title: 'Paddleboards',
    description: 'Information about different Paddleboards.'
    },
    {
    image: weatherLogo,
    title: 'Weather Information',
    description: 'Information about weather conditions.'
    },
];

/* Constant EXAMPLES that holds nested objects with keys that match identifiers that are passsed up on button clicks (lakes, paddleboards, and weatherInformation) */
export const EXAMPLES = {
    lakes: {
        title: 'Lakes',
        description: 'Lough Corrib, St Johns Lake, Castlefore Lake, Kiltybarden Lake, Ross Lake, River Suck, River Corrib, Ballinamore Canal.'
    },

    paddleboards: {
        title: 'Paddleboards',
        description: 'Types: Hard Paddleboards and Inflatable Paddleboards. Sizes(Lenght): 9 - 11 inches (All Round SUP Board). 8 - 10 inches (Wave SUP Board). 10 - 14 inches (Race SUP Board).'
    },

    weatherInformation: {
        title: 'Weather Information',
        description: '0kt - 5kt (Chill Out Day). 5kt - 10kt (Training Day). Over 15kt (DO NOT GO OUT ON THE WATER).'
    }
};
