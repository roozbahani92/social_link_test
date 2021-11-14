import React, {useEffect, useState} from 'react';
import useStyle from "./styles";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Button, Skeleton, Typography} from "@mui/material";
import DeleteModal from "./DeleteModal";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const SubmittedList = ({setEdit, setCollapseOpen, updateList, isLoading, list, setEditId, setOpenSuccess, setSuccessMessage, setErrorMessage, setOpenError}) => {

    const classes = useStyle();

    const [showModal, setShowModal] = useState(false);

    const [deleteId, setDeleteId] = useState();

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowModal(true);
    };

    const handleEdit = (id) => {
        setEdit(true);
        setCollapseOpen(true);
        setEditId(id);

    };

    useEffect(() => {
        updateList();
    }, []);


    const getSocialType = (link) => {
        if (link.includes('instagram'))
            return <div className={classes.typeBox}><InstagramIcon fontSize={"small"}
                                                                   sx={{marginLeft: '0.5rem'}}/><span>اینستاگرام</span>
            </div>;
        else if (link.includes('facebook'))
            return <div className={classes.typeBox}><FacebookIcon fontSize={"small"}
                                                                   sx={{marginLeft: '0.5rem'}}/><span>فیسبوک</span>
            </div>;
        else if (link.includes('telegram'))
            return <div className={classes.typeBox}><TelegramIcon fontSize={"small"}
                                                                   sx={{marginLeft: '0.5rem'}}/><span>تلگرام</span>
            </div>;
        else if (link.includes('twitter'))
            return <div className={classes.typeBox}><TwitterIcon fontSize={"small"}
                                                                   sx={{marginLeft: '0.5rem'}}/><span>توییتر</span>
            </div>;
        else if (link.includes('linkedin'))
            return <div className={classes.typeBox}><LinkedInIcon fontSize={"small"}
                                                                   sx={{marginLeft: '0.5rem'}}/><span>لینکداین</span>
            </div>;
        else
            return <div className={classes.typeBox}><LanguageIcon fontSize={"small"}
                                                                   sx={{marginLeft: '0.5rem'}}/><span>وبسایت</span>
            </div>;
    };


    return (
        <>
            {
                isLoading ?
                    <>
                        <Skeleton variant="h1" className={classes.skeleton}/>
                        <Skeleton variant="h1" className={classes.skeleton}/>
                        <Skeleton variant="h1" className={classes.skeleton}/>
                    </> :
                    list.map(item =>
                        <div className={classes.itemBox} key={item.id}>
                            <div className={classes.infoBox}>
                                <Typography
                                    sx={{fontSize: '12px !important'}}>{getSocialType(item.social_link)}</Typography>
                                <Typography className={classes.itemLabel}>آی دی (ID):</Typography>
                                <Typography className={classes.idValue}>{item.social_id}</Typography>
                                <Typography className={classes.itemLabel}>لینک:</Typography>
                                <Typography
                                    className={classes.linkValue}>{item.social_link}</Typography>
                            </div>
                            <div>
                                <Button className={classes.editBtn}
                                        startIcon={<EditIcon className={classes.editIcon}
                                                             sx={{fontSize: 'medium !important'}}/>}
                                        onClick={() => handleEdit(item.id)}
                                >
                                    ویرایش
                                </Button>
                                <Button color="error" className={classes.delBtn}
                                        startIcon={<DeleteIcon className={classes.deleteIcon}
                                                               sx={{fontSize: 'medium !important'}}/>}
                                        onClick={() => handleDelete(item.id)}
                                >
                                    حذف
                                </Button>
                            </div>
                        </div>
                    )}
            <DeleteModal
                show={showModal}
                setShow={setShowModal}
                id={deleteId}
                updateList={updateList}
                setOpenSuccess={setOpenSuccess}
                setOpenError={setOpenError}
                setSuccessMessage={setSuccessMessage}
                setErrorMessage={setErrorMessage}
            />
        </>

    );
};

export default SubmittedList;