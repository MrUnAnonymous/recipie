import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#F3FDE8",
        color: "white",   
    },
    mainGrid: {
        minHeight: '100vh',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        boxSizing: 'border-box',
        maxHeight: '400px',
        minHeight: '150px',
        marginTop: '10px',
    },
    cardGrid: {
        margin: 0,
        minHeight: '100vh'
    },
    media: {
        paddingTop: '56.25%', // 16:9
        marginBottom: '5px',
        height: '100%',
        width: '100%' 
    },
    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    appBar: {
        width: "100vw",
        borderRadius: 15,
        margin: '10px 0 0 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '10px 20px',
    },
    navgationButton: {
        color: 'white',
        fontWeight: 'bold',
        textDecoration: 'none',
    }
}));

export default useStyles;