import { createStyles, makeStyles } from '@material-ui/styles';

import {
    spaceBlue5
    , spaceBlue3
    , colorfulSpace4
    , colorfulSpace2
    , spaceBlue4
} from '../../globalStyles';

const useStyles = makeStyles( ( theme ) => {
    return createStyles( { 
        container: {
        }
        , appBar: {
            position: '-webkit-sticky'
            , position: 'sticky'
            , zIndex: 1120
            , color: spaceBlue5
        }
        , toolbar: {
            backgroundColor: spaceBlue5
        }
        , navBarLink: {
            textAlign: 'right'
            , '& :hover': {
                color: 'transparent'
                , cursor: 'pointer'
            }
        }
        , navBarButton: {
            textAlign: 'right'
            , '& :hover': {
                cursor: 'pointer'
            }
        }
        , moreIconContainer: {
            textAlign: 'right'
            , color: '#fff'
        }
        , moreIcon: {
        }
        , startTitle: {
            marginBottom: 20
        }
        , startModalContainer: {
            position: 'absolute'
            , top: '50%'
            , left: '50%'
            , transform: 'translate(-50%, -50%)'
            , height: 300
            , width: 400
            , background: spaceBlue3
            , boxShadow: 24
            , p: 4
            , borderRadius: 2
            , padding: '25px 50px'
            , display: 'flex'
            , alignItems: 'center'
        }
        , buttonsContainer: {
            height: '100%'
            , width: '100%'
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
        , primaryButtonOutlinedText: {
            color: colorfulSpace2
            , fontWeight: 800
            , letterSpacing: '.05rem'
            , textDecoration: 'none'
            , padding: '0 17px'
        }
        , primaryButtonText: {
            color: spaceBlue3
            , fontWeight: 800
            , letterSpacing: '.05rem'
        }
        , primaryButton: {
            height: 40
            , display: 'flex'
            , alignItems: 'center'
        }
        , primaryButtonOutlined: {
            height: 40
            , display: 'flex'
            , alignItems: 'center'
            , width: 223
        }
        , accountDetailsMenu: {
            '& .MuiPaper-root': {
                backgroundColor: spaceBlue3
                , width: 400
                , padding: 30
            }
        }
        , accountDetailsMenuList: {
            width: '100%'
            , height: '100%'
        }
        , accountMenuListItem: {
            backgroundColor: spaceBlue4
            , margin: '10px 0'
            , color: '#fff'
            , padding: '0 10px'
        }
        , viewMyProfileLink: {
            padding: '0 10px'
        }
        , accountDetailsTitle: {
            padding: '0 20px'
            , '& .MuiTypography-root': {
                width: 100
            }
        }
        , divider: {
            width: 100
        }
    } );
} );

export default useStyles;