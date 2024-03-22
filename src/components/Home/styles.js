import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({ 
    mainContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        backgroundColor: "#F3FDE8",
        minHeight: '100vh',
    },
    mainGrid: {
        minHeight: '100vh',
    },
    cardGrid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 0,
        gap: 5,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '300px',
        boxSizing: 'border-box',
        borderRadius: '20px',
        maxHeight: '400px',
        minHeight: '150px',
        minWidth: '150px',
        marginTop: '10px',
    },
    container: {
        margin: 0,
        minHeight: '100vh',
    },
    media: {
        paddingTop: '56.25%', // 16:9
        borderRadius: '20px',
        marginBottom: '5px',
        height: '100%',
        width: '100%' 
    },
    cardContent: {
        flexGrow: '1',
    },
}));

export default useStyles;