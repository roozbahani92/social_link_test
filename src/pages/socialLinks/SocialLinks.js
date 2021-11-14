import React, {useEffect, useState} from 'react';
import {Card, CardContent, Grid, Typography, Box, Button, Snackbar, Alert} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import useStyle from "./styles";
import SocialForm from "./SocialForm";
import SubmittedList from "./SubmittedList";
import EditIcon from "@mui/icons-material/Edit";
import {getSocialList} from "../../api/api-socials";

const SocialLinks = () => {

    const classes = useStyle();

    const [collapseOpen, setCollapseOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState();
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        console.log("edit id", editId)
    },[editId])

    const handleClick = () => {
        setCollapseOpen(true);
    };

    const updateList = () => {
        setIsLoading(true);
        getSocialList((isOk, data) => {
            setIsLoading(false);
            if (!isOk)
                return console.log(data);
            setList(data);
        })
    };

    const getEditItem = () => {
      if(editMode && editId){
          return list.filter(i => i.id === editId)[0]
      }
      else
          return {}
    };

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} marginTop={'5rem'}>
            <Grid item xs={8}>
                <Typography variant="h6" fontWeight={"bold"}>
                    حساب کاربری
                </Typography>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography sx={{fontSize: 12}} color="text.secondary" gutterBottom>
                            مسیرهای ارتباطی
                        </Typography>
                        {
                            !editMode ?
                                <Button className={classes.addBtn}
                                        startIcon={<AddIcon className={classes.addIcon}/>}
                                        onClick={handleClick}
                                >
                                    افزودن مسیر ارتباطی
                                </Button> :
                                <Button className={classes.addBtn}
                                        startIcon={<EditIcon className={classes.editIcon}
                                                             sx={{fontSize: 'medium !important'}}/>}
                                        onClick={handleClick}
                                >
                                    ویرایش مسیر ارتباطی
                                </Button>
                        }

                        <SocialForm
                            collapseOpen={collapseOpen}
                            setCollapseOpen={setCollapseOpen}
                            editMode={editMode}
                            setEditMode={setEditMode}
                            updateList={updateList}
                            editItem={getEditItem()}
                            setOpenSuccess={setOpenSuccess}
                            setOpenError={setOpenError}
                            setSuccessMessage={setSuccessMessage}
                            setErrorMessage={setErrorMessage}
                        />

                        <SubmittedList
                            setEdit={setEditMode}
                            setCollapseOpen={setCollapseOpen}
                            updateList={updateList}
                            isLoading={isLoading}
                            list={list}
                            setEditId={setEditId}
                            setOpenSuccess={setOpenSuccess}
                            setOpenError={setOpenError}
                            setSuccessMessage={setSuccessMessage}
                            setErrorMessage={setErrorMessage}
                        />
                    </CardContent>
                </Card>
            </Grid>
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={() => setOpenSuccess(false)}>
                <Alert severity="success" sx={{width: '100%'}}>
                    {successMessage}
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={6000} onClose={() => setOpenError(false)}>
                <Alert severity="error" sx={{width: '100%'}}>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </Grid>

    );
};

export default SocialLinks;