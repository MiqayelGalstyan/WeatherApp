import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    container: {
        padding: 20,
    },
    mainColor: {
        backgroundColor: "rgb(234, 236, 239)",
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        '@media (max-width: 767px)': {
            flexWrap: 'wrap'
        }
    },
    leftPane: {
        width: '10%',
        height: '95vh',
        backgroundColor: "rgb(234, 236, 239)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        '@media (max-width: 1100px)': {
            width: '20%',
        },
        '@media (max-width: 767px)': {
            width: '100%',
            minHeight: '30vh',
            height: 'auto',
            marginBottom: 20,
        }
    },
    center: {
        width: '50%',
        borderRadius: 10,
        marginTop: 2,
        '@media (max-width: 1100px)': {
            width: '40%',
        },
        '@media (max-width: 767px)': {
            width: '100%',
            '& h3': {
                fontSize: 18,
                textAlign: 'center'
            },
            '& p': {
                fontSize: 15,
                textAlign: 'center'
            },
            '& h4': {
                fontSize: 16,
            },
            '& h5': {
                fontSize: 15,
            },
            '& h6': {
                fontSize: 14,
            },
        }
    },
    titleArea: {
        '@media (max-width: 767px)': {
            '&.MuiBox-root': {
                paddingLeft: '0',
            }
        }
    },
    rightPane: {
        width: '35%',
        marginLeft: 2,
        borderRadius: 10,
        '@media (max-width: 1100px)': {
            width: '30%',
        },
        '@media (max-width: 767px)': {
            width: '100%',
            '& h5': {
                fontSize: 15,
            },
            '& p': {
                fontSize: 13,
            }
        }
    },
    img: {
        objectFit: "contain",
        width: 80,
        height: 80,
    },
    iconArea: {
        marginTop: 20,
        width: '100%',
        textAlign: 'center',
        '& hr': {
            marginTop: 10,
            marginBottom: 10,
        }
    }
}));