import { makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: "90%",
        borderRadius: 15,
        margin: '10px 0 0 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
    }
}));

export default useStyles;