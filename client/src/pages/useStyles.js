import { createStyles, makeStyles } from '@material-ui/styles';

import {
    pageBackgroundColor
    , spaceBlue3
    , colorfulSpace4
} from '../globalStyles.js';

const useStyles = makeStyles( ( theme ) => {
    return createStyles( { 
        container: {
            background: pageBackgroundColor
            , width: '100vw'
            , height: '100vh'
            , padding: '110px 20px 20px 20px'
            , overflow: 'auto'
        }
        , containerThird: {
            background: pageBackgroundColor
            , width: '100vw'
            , height: '100vh'
            , padding: '110px 20px 20px 20px'
            , overflow: 'auto'
        }
        , containerSecond: {
            background: pageBackgroundColor
            , width: '100vw'
            , height: '100vh'
            , padding: '20px'
            , overflow: 'hidden'
            , display: 'flex'
            , justifyContent: 'center'
            , alignItems: 'center'
        }
        , pageImgContainer: {
            textAlign: 'center'
            , marginTop: 1000
        }
        , pageImg: {
            width: '85%'
            , height: '85%'
        }
        , pageAboutImgContainer: {
            width: '85%'
            , height: '100%'
            , textAlign: 'center'
            , display: 'flex'
            , justifyContent: 'center'
            , alignItems: 'center'
        }
        , pageAboutImg: {
            width: '100%'
            , height: '100%'
        }
        , guideImage: {
            width: '45%'
            , height: '45%'
        }
        , devDoggieTypeContainer: {
            height: 370
            , width: '100%'
            , paddingTop: 40
        }
        , primaryButton: {
            height: 40
            , display: 'flex'
            , alignItems: 'center'
        }
        , primaryButtonText: {
            color: spaceBlue3
            , fontWeight: 800
            , letterSpacing: '.05rem'
            , padding: '0 50px'
        }
        , textFieldContainer: {
            padding: '10px 0'
            , color: '#fff'
        }
        , textField: {
            color: '#fff'
        }
        , input: {
        }
        , disabledButton: {
            color: colorfulSpace4
            , fontWeight: 800
            , letterSpacing: '.05rem'
            , height: 40
            , padding: '0 25px'
            , display: 'flex'
            , alignItems: 'center'
            , textAlign: 'center'
        }
        , disabledButtonText: {
            color: colorfulSpace4
            , fontWeight: 800
            , letterSpacing: '.05rem'
            , padding: '0 36px'
        }
    } );
} );

export default useStyles;