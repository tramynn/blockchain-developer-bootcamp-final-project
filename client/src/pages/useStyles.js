import { createStyles, makeStyles } from '@material-ui/styles';

import {
    pageBackgroundColor
} from '../globalStyles.js';

const useStyles = makeStyles( ( theme ) => {
    return createStyles( { 
        container: {
            background: pageBackgroundColor
            , width: '100vw'
            , height: '100vh'
            , padding: '110px 20px'
            , overflow: 'hidden'
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
    } );
} );

export default useStyles;