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
        width: '100%'
    },
    leftPane: {
        width: '10%',
        height: '95vh',
        backgroundColor: "rgb(234, 236, 239)",
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    center: {
        width: '50%'
    },
    rightPane: {
        width: '35%',
        marginLeft: 2,
    },
    img: {
        objectFit: "cover",
        width: 80,
        height: 80,
    },
    bold: {
        fontWeight: 'bold'
    },
    rightPaneItemImg: {
        width: 50,
        height: 50,
        objectFit: 'contain',
    }
}));