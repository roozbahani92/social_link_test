import React, {useState} from 'react';
import * as Yup from "yup";
import {addSocial} from "../../api/api-socials";
import {
    Button,
    CircularProgress,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {Formik} from "formik";
import useStyle from "./styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const AddForm = ({setCollapseOpen, updateList, setOpenSuccess, setSuccessMessage, setErrorMessage, setOpenError}) => {

    const classes = useStyle();

    const [isLoading, setIsLoading] = useState(false);

    const handleCancel = (reset) => {
        setCollapseOpen(false);
        reset();
    };

    return (
        <Formik
            initialValues={{social_type: '', social_link: '', social_id: ''}}
            enableReinitialize = {true}
            validationSchema={Yup.object({
                social_type: Yup.string()
                    .required('انتخاب این فیلد الزامی می باشد.'),
                social_link: Yup.string()
                    .url('لینک وارد شده معتبر نمی باشد.')
                    .required('وارد کردن این فیلد الزامی می باشد.'),
                social_id: Yup.string()
                    .required('وارد کردن این فیلد الزامی می باشد.'),
            })}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setIsLoading(true);
                addSocial(values, (isOk, data) => {
                    setIsLoading(false);
                    if (!isOk){
                        setErrorMessage("افزودن با خطا مواجه شد.")
                        return setOpenError(true);
                    }
                    setSuccessMessage("مسیر ارتباطی جدید با موفقیت افزوده شد.")
                    setOpenSuccess(true);
                    updateList();
                    resetForm();
                })
                setSubmitting(false);
            }}
        >
            {formik => (
                <form className={classes.formBox} onSubmit={formik.handleSubmit}>
                    <Typography className={classes.formTitle} gutterBottom>
                        افزودن مسیر ارتباطی
                    </Typography>
                    <Grid container spacing={2} marginTop={'0.5rem'}>
                        <Grid item xs={4}>
                            <FormControl fullWidth dir="rtl">
                                <InputLabel>نوع*</InputLabel>
                                <Select
                                    label="Age"
                                    id="social_type"
                                    type="text"
                                    {...formik.getFieldProps('social_type')}
                                    sx={{display: 'flex', alignItems: 'center'}}
                                >
                                    <MenuItem value={1}><InstagramIcon fontSize={"small"}
                                                                       sx={{marginLeft: '0.5rem'}}/>اینستاگرام</MenuItem>
                                    <MenuItem value={2}><FacebookIcon fontSize={"small"}
                                                                      sx={{marginLeft: '0.5rem'}}/>فیسبوک</MenuItem>
                                    <MenuItem value={3}><TelegramIcon fontSize={"small"}
                                                                      sx={{marginLeft: '0.5rem'}}/>تلگرام</MenuItem>
                                    <MenuItem value={4}><TwitterIcon fontSize={"small"}
                                                                     sx={{marginLeft: '0.5rem'}}/>توییتر</MenuItem>
                                    <MenuItem value={5}><LinkedInIcon fontSize={"small"}
                                                                      sx={{marginLeft: '0.5rem'}}/>لینکداین</MenuItem>
                                    <MenuItem value={6}><LanguageIcon fontSize={"small"}
                                                                      sx={{marginLeft: '0.5rem'}}/>وبسایت</MenuItem>
                                </Select>
                                {formik.touched.social_type && formik.errors.social_type ? (
                                    <div className={classes.error}>{formik.errors.social_type}</div>
                                ) : null}
                            </FormControl>

                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                className={classes.input}
                                label="لینک"
                                variant="outlined"
                                fullWidth
                                id="social_link"
                                type="text"
                                {...formik.getFieldProps('social_link')}
                            />
                            {formik.touched.social_link && formik.errors.social_link ? (
                                <div className={classes.error}>{formik.errors.social_link}</div>
                            ) : null}
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                className={classes.input}
                                label="آی دی (ID)"
                                variant="outlined"
                                fullWidth
                                id="social_id"
                                type="text"
                                {...formik.getFieldProps('social_id')}
                            />
                            {formik.touched.social_id && formik.errors.social_id ? (
                                <div className={classes.error}>{formik.errors.social_id}</div>
                            ) : null}
                        </Grid>
                    </Grid>
                    <div className={classes.btnsBox}>
                        <Button variant={"outlined"} className={classes.formCancelBtn}
                                onClick={() => handleCancel(formik.resetForm)}>
                            انصراف
                        </Button>
                        <Button variant="contained" type="submit" className={classes.formAddBtn}
                                disabled={isLoading}>
                            {
                                isLoading &&
                                <CircularProgress color="warning" size={10} sx={{marginLeft: 1}}/>
                            }
                            ثبت مسیر ارتباطی
                        </Button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default AddForm;