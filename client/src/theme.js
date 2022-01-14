import { createTheme } from '@mui/material/styles';
import {
    spaceBlue1
    , spaceBlue2
    , spaceBlue3
    , spaceBlue4
    , spaceBlue5
    , colorfulSpace1
    , colorfulSpace2
    , colorfulSpace3
    , colorfulSpace4
    , colorfulSpace5
} from './globalStyles.js';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: colorfulSpace2
        }
        , secondary: {
            main: spaceBlue1
        }
        , success: {
            main: colorfulSpace1
        }
        , error: {
            main: colorfulSpace5
        }
        , warning: {
            main: colorfulSpace3
        }
    }
    , typography: {
        fontFamily: [
            'Open Sans'
            , 'Lato'
            , 'sans-serif'
        ].join( ',' )
        , fontSize: 14
        , h1: {
            fontFamily: [
                'Fredoka One'
                , 'cursive'
            ].join( ',' )
            , color: spaceBlue1
            , fontSize: '4rem'
            , fontWeight: 600
            , textAlign: 'center'
            , borderBottom: `15px solid ${ spaceBlue3 }`
            , lineHeight: .5
            , width: '100%'
        }
        , h2: {
            fontFamily: [
                'Fredoka One'
                , 'cursive'
            ].join( ',' )
            , color: '#fff'
            , fontSize: '2.2rem'
            , fontWeight: 600
        }
        , h3: {
            fontFamily: [
                'Fredoka One'
                , 'cursive'
            ].join( ',' )
            , color: '#fff'
            , fontSize: '2rem'
            , fontWeight: 600
            , marginTop: '1rem'
            , marginBottom: '1rem'
        }
        , h4: {
            fontFamily: [
                'Open Sans'
                , 'sans-serif'
            ].join( ',' )
            , color: '#fff'
            , fontSize: '2rem'
            , fontWeight: 800
            , marginTop: '1rem'
            , marginBottom: '1rem'
            , borderBottom: `10px solid ${ spaceBlue1 }`
            , lineHeight: .6
            , marginTop: 0
        }
        , h5: {
            fontFamily: [
                'Fredoka One'
                , 'cursive'
            ].join( ',' )
            , color: '#fff'
            , fontSize: '1.6rem'
            , fontWeight: 600
            , marginTop: '1rem'
            , marginBottom: '1rem'
        }
        , h6: {
            fontFamily: [
                'Open Sans'
                , 'sans-serif'
            ].join( ',' )
            , color: '#fff'
            , fontSize: '1.1rem'
            , fontWeight: 800
            , marginTop: '1rem'
            , marginBottom: '1rem'
        }
        , body1: {
            fontFamily: [
                'Open Sans'
                , 'sans-serif'
            ].join( ',' )
            , fontSize: '1rem'
            , fontWeight: 600
            , color: '#fff'
        }
        , body2: {
            fontFamily: [
                'Open Sans'
                , 'sans-serif'
            ].join( ',' )
            , fontSize: 14
            , color: '#fff'
        }
    }
    , overrides: {
    }
});

export default theme;
