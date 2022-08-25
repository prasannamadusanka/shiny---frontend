import React from "react";
import { Button, TextField } from "@mui/material";
//import TextField from "components/TextField";
//import RaisedButton from "material-ui/RaisedButton";
//import TextField from "assets/theme/components/form/TextField";
import PasswordStr from "./PasswordStr";
import "./style.css";
//import { TextField } from "react-icons/md";
import MDBox from "components/MDBox";
import logo from "assets/images/logo-shiny.png";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";

const SignUpForm = ({
    history,
    onSubmit,
    onChange,
    errors,
    user,
    score,
    btnTxt,
    type,
    pwMask,
    onPwChange
}) => {
    return (

        <div className="loginBox">
            {/* <MDAvatar src="assets/iimages"></MDAvatar> */}
            <Grid container lg={20}>
                <Grid item lg={4} pr={10}>
                    <MDBox component="img" src={logo} />
                </Grid>
                <Grid item lg={8}>
                    <MDBox textAlign="left" mt={10} ml={4}>
                        <MDTypography variant="h2">SHINY HOTELS</MDTypography>
                    </MDBox>
                </Grid>
            </Grid>
            <MDTypography color="#3f51b5" variant="h4">Join us and make your dreams come true...!</MDTypography>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

            <form onSubmit={onSubmit}>

                <MDBox mt={2} p={1}>
                    <TextField
                        fullWidth="true"
                        name="username"
                        label="username"
                        floatinglabeltext="user name"
                        value={user.username}
                        onChange={onChange}
                        helperText={errors.username}
                    />
                </MDBox>
                <MDBox mt={2} p={1}>
                    <TextField
                        fullWidth
                        name="email"
                        label="email"
                        floatingLabelText="email"
                        value={user.email}
                        onChange={onChange}
                        errortext={errors.email}

                    />
                </MDBox>
                <MDBox mt={2} p={1}>
                    <TextField
                        fullWidth="true"
                        name="contactNumber"
                        label="contacNumber"
                        floatinglabeltext="email"
                        value={user.contactNumber}
                        onChange={onChange}
                        helperText={errors.phone}
                    />
                </MDBox>
                <MDBox mt={2} p={1}>
                    <TextField
                        fullWidth="true"
                        name="addressOne"
                        label="addressOne"
                        floatinglabeltext="email"
                        value={user.addressOne}
                        onChange={onChange}
                        helperText={errors.address}
                    />
                </MDBox>
                <MDBox mt={2} p={1}>
                    <TextField
                        fullWidth="true"
                        name="addressTwo"
                        label="addressTwo"
                        floatinglabeltext="email"
                        value={user.addressTwo}
                        onChange={onChange}

                    />
                </MDBox>
                <MDBox mt={2} p={1}>
                    <TextField
                        fullWidth="true"
                        name="nic"
                        label="Nation Identity Card Number"
                        floatinglabeltext="nic"
                        value={user.nic}
                        onChange={onChange}
                        helperText={errors.nic}
                    />

                </MDBox>

                <MDBox lg={40} mt={2} p={1} >
                    <TextField
                        fullwidth="true"
                        type={type}
                        name="password"
                        label="password"
                        floatinglabeltext="password"
                        value={user.password}
                        onChange={onPwChange}
                        helperText={errors.password}
                    />
                </MDBox>
                <div className="pwStrRow">
                    {score >= 1 && (
                        <div>
                            <PasswordStr score={score} />
                            <Button
                                className="pwShowHideBtn"
                                label={btnTxt} onClick={pwMask}
                                style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
                            />
                        </div>
                    )}
                </div>
                <MDBox mt={2} p={1}>
                    <TextField
                        type={type}
                        fullWidth="true"
                        name="pwconfirm"
                        label="pwconfirm"
                        floatinglabeltext="confirm password"
                        value={user.pwconfirm}
                        onChange={onChange}
                        helperText={errors.pwconfirm}
                    />
                </MDBox>
                <br />
                <Button
                    className="signUpSubmit"
                    primary={true}
                    type="submit"
                    label="submit"
                ><strong><h2><font color="#00bcd4">Sign up</font></h2></strong></Button>
            </form>
            <p>
                <font color="#3f51b5"><h5>Aleady have an account?</h5></font>
                <a href="/"><font color="#3d5afe"><strong>Log in</strong></font></a>
            </p>
        </div>

    );
};

export default SignUpForm;
