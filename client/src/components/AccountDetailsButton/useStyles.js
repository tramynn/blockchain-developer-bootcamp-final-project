import { createStyles, makeStyles } from '@material-ui/styles';

import {
    colorfulSpace2
    , spaceBlue2
    , spaceBlue3
    , spaceBlue5
} from '../../globalStyles';

const useStyles = makeStyles( ( theme ) => {
    return createStyles( { 
        container: {
            width: 175
            , height: 50
            , background: spaceBlue5
            , border: 'none'
            , position: 'relative'
        }
        , buttonFirstLayer: {
            background: spaceBlue2
            , position: 'absolute'
            , top: 8
            , right: 0
            , zIndex: 2
            , width: 175
            , height: 40
            , lineHeight: '2rem'
            , borderRadius: 5
            , '&:hover': {
                background: colorfulSpace2
                , color: spaceBlue3
            }
        }
        , buttonSecondLayer: {
            background: spaceBlue3
            , position: 'absolute'
            , top: 15
            , right: -7
            , zIndex: 1
            , width: 175
            , height: 40
            , borderRadius: 5
        }
        , buttonText: {
            position: 'relative'
            , top: -10
            , right: 0
            , width: 175
            , height: 40
            , '&:hover': {
                color: spaceBlue3
            }
        }
        , successText: {
            display: 'flex'
            , alignItems: 'center'
            , justifyContent: 'center'
        }
    } );
} );

export default useStyles;