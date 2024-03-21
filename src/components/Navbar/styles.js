import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: "90vw",
        borderRadius: 15,
        margin: '10px 0 0 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
    },
}));

export default useStyles;