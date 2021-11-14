import {makeStyles} from '@mui/styles';

const useStyle = makeStyles(theme => ({

        card: {
            boxShadow: 3,
            marginTop: '2rem',
            border: "none"
        },
        addBtn: {
            color: "#ffc107 !important",
            fontSize: '11px !important',
            fontWeight: 'bold !important',
            marginTop: '1rem',
            '&:hover': {
                backgroundColor: 'rgba(255,193,7, 0.1) !important',
            },
        },
        addIcon: {
            marginLeft: '0.5rem !important',
            fontSize: 'small'
        },
        formBox: {
            backgroundColor: "#eceff1",
            borderRadius: 8,
            padding: '1rem',
            marginTop: '1rem'
        },
        formTitle: {
            fontSize: '11px !important',
            fontWeight: 'bold !important'
        },
        input: {
            "&:focus": {
                outline: '1px solid "#ffc107 !important"'
            }
        },
        btnsBox: {
            display: "flex",
            justifyContent: 'flex-end',
            marginTop: '1rem'
        },
        formAddBtn: {
            color: "#212121 !important",
            borderColor: "#212121 !important",
            backgroundColor: "#ffc107 !important",
            fontSize: '11px !important',
            fontWeight: 'bold !important',
            marginRight: '0.5rem !important',
            '&:hover': {
                backgroundColor: '#ff9800 !important',
            },
        },
        formCancelBtn: {
            color: "#212121 !important",
            borderColor: "#bdbdbd !important",
            fontSize: '11px !important',
            fontWeight: 'bold !important',

        },
        itemBox: {
            backgroundColor: "#eceff1",
            borderRadius: 8,
            marginTop: '0.5rem',
            padding: '1rem',
            display: "flex",
            justifyContent: "space-between"
        },
        infoBox: {
            display: "flex",
            alignItems: 'center'
        },
        itemLabel: {
            margin: '0 2rem 0 0.5rem !important',
            color: "#757575",
            fontSize: '11px !important'
        },
        linkValue: {
            color: "#ffc107",
            fontSize: '12px !important'

        },
        idValue: {
            fontSize: '12px !important'

        },
        delBtn: {
            fontSize: '12px !important',
            fontWeight: 'bold !important',
        },
        deleteIcon: {
            marginLeft: '0.5rem',

        },
        editBtn: {
            color: "#ffc107 !important",
            fontSize: '11px !important',
            fontWeight: 'bold !important',
            '&:hover': {
                backgroundColor: 'rgba(255,193,7, 0.1) !important',
            },
        },
        editIcon: {
            marginLeft: '0.5rem',

        },
        deleteModal: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            backgroundColor: "white",
            borderRadius: 10,
            boxShadow: 24,
            padding: '1rem',
        },
        modalQuestion: {
            fontSize: '14px !important',
            fontWeight: 'bold !important',
        },
        modalDesc: {
            fontSize: '12px !important',
            marginTop: '1rem !important'
        },
        modalInput: {
            marginTop: '1rem !important',
        },
        modalBtnsBox: {
            display: "flex",
            justifyContent: "flex-end",
            marginTop: '2rem'
        },
        skeleton: {
            width: "100%",
            height: "65px !important",
            backgroundColor: "#eceff1 !important",
            borderRadius: "8px !important",
            marginTop: '0.5rem !important '
        },
        typeBox: {
            display: "flex",
            alignItems: "center"
        },
        error: {
            color : theme.palette.error.main,
            fontSize : 10,
            marginTop : 2
        }

    })
);

export default useStyle;