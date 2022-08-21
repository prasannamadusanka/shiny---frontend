const validator = require('validator')

const validateSignUpForm = payload => {
  const errors = {};
  let message = "";
  let isFormValid = true;

  if (
    !payload ||
    typeof payload.username !== "string" ||
    payload.username.trim().length === 0
  ) {
    isFormValid = false;
    errors.username = "Please provide a user name.";
  }

  if (
    !payload ||
    typeof payload.email !== "string" ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = "Please provide a correct email address.";
  }
//   if (
//     !payload ||
//     typeof payload.contactNumber!== "string" ||
//     !validator.isMobilePhone(payload.contactNumber,['sl-SI','en-GB'])
//   ) {
//     isFormValid = false;
//     errors.phone = "Please provide a correct mobile phone number.";
//   }
  if (
    !payload ||
    typeof payload.addressOne!== "string"
   
  ) {
    isFormValid = false;
    errors.address = "Please provide a address";
    console.log(errors.address)
  }
//   if (
//     !payload ||
//     typeof payload.nic !== "string" ||
//     payload.nic.trim().length !== 10
//   ) {
//     isFormValid = false;
//     errors.nic = "Nic must have 10 characters";
//   }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length < 8
  ) {
    isFormValid = false;
    errors.password = "Password must have at least 8 characters.";
  }

  if (!payload || payload.pwconfirm !== payload.password) {
    isFormValid = false;
    errors.pwconfirm = "Password confirmation doesn't match.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors
  };
};


export default validateSignUpForm;