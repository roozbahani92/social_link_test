import React, {useRef, useState} from 'react';
import {Box, Button, CircularProgress, Modal, TextField, Typography} from "@mui/material";
import useStyle from "./styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {deleteSocial} from "../../api/api-socials";

const DeleteModal = ({show, setShow, id, updateList, setErrorMessage, setOpenError, setOpenSuccess, setSuccessMessage}) => {

    const classes = useStyle();

    const [disabledDelete, setDisabledDelete] = useState(true);

    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const formRef = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
        if (e.target.value === 'تایید')
            setDisabledDelete(false);
        else
            setDisabledDelete(true);
    };


    const handleClose = () => {
        formRef.current.reset();
        setText('');
        setShow(false);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        setIsLoading(true);
        deleteSocial(id, (isOk, data) => {
            setIsLoading(false);
            if (!isOk){
                setErrorMessage("حذف با خطا مواجه شد.")
                return setOpenError(true);
            }
            setSuccessMessage("حذف با موفقیت انجام شد.")
            setOpenSuccess(true);
           updateList();
           handleClose();

        });
    };

    return (
        <Modal
            open={show}
            onClose={handleClose}
        >
            <Box className={classes.deleteModal}>
                <form ref={formRef} onSubmit={handleDelete} method={"post"}>
                    <Typography variant="h6" component="h2" className={classes.modalQuestion}>
                        آیا از تصمیم خود مطمئن هستید؟
                    </Typography>
                    <Typography className={classes.modalDesc}>
                        برای حذف مسیر ارتباطی  mhosseinitaher@  لطفا تایید را بنویسید
                    </Typography>

                    <TextField
                        className={classes.modalInput}
                        variant="outlined"
                        fullWidth
                        placeholder={"تایید"}
                        value={text}
                        onChange={(e) => handleChange(e)}
                    />

                    <div className={classes.modalBtnsBox}>
                        <Button className={classes.editBtn}
                                onClick={handleClose}
                        >
                            انصراف
                        </Button>
                        <Button
                            color="error"
                            className={classes.delBtn}
                            disabled={disabledDelete || isLoading}
                            type="submit"
                        >
                            {
                                isLoading && <CircularProgress color="error" size={10} sx={{marginLeft: 0.5}}/>
                            }
                            حذف
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default DeleteModal;