import React, {useState} from 'react';
import {Alert, Collapse, Snackbar} from "@mui/material";
import AddForm from "./AddForm";
import EditForm from "./EditForm";


const SocialForm = ({collapseOpen, setCollapseOpen, editMode, setEditMode, updateList, editItem, setOpenSuccess, setSuccessMessage, setErrorMessage , setOpenError}) => {

    return (
        <>
            <Collapse in={collapseOpen} sx={{marginBottom: '2rem'}}>
                {
                    !editMode ?
                        <AddForm
                            setCollapseOpen={setCollapseOpen}
                            updateList={updateList}
                            setOpenSuccess={setOpenSuccess}
                            setOpenError={setOpenError}
                            setSuccessMessage={setSuccessMessage}
                            setErrorMessage={setErrorMessage}
                        />
                        :
                        <EditForm
                            setCollapseOpen={setCollapseOpen}
                            setEditMode={setEditMode}
                            updateList={updateList}
                            editItem={editItem}
                            setOpenSuccess={setOpenSuccess}
                            setOpenError={setOpenError}
                            setSuccessMessage={setSuccessMessage}
                            setErrorMessage={setErrorMessage}
                        />
                }

            </Collapse>

        </>

    )
        ;
};

export default SocialForm;