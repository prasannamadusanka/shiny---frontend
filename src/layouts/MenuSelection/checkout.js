export default function CheckoutPage() {
    // const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const isLastStep = activeStep === steps.length - 1;
    /* 
      function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      } */
  
    /*   async function _submitForm(values, actions) {
        await _sleep(1000);
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    
        setActiveStep(activeStep + 1);
      }
     */
    function _handleSubmit() {
      if (isLastStep) {
        setActiveStep(activeStep + 1);
      } else {
        setActiveStep(activeStep + 1);
        console.log(activeStep);
        /*    actions.setTouched({});
           actions.setSubmitting(false); */
      }
    }
  
    function _handleBack() {
      setActiveStep(activeStep - 1);
    }
  
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <React.Fragment>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} /* className={classes.stepper} */>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                {/* <Typography variant="h5" gutterBottom>
             Thank you for your order.
           </Typography>
           <Typography variant="subtitle1">
             Your order number is #2001539. We have emailed your order confirmation,
             and will send you an update when your order has shipped.
           </Typography> */}
  
                <BasketOne
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                ></BasketOne>
  
              </React.Fragment>
            ) : (
              <Formik
  
  
  
              >
                {({ isSubmitting }) => (
                  <Form >
                    {_renderStepContent(activeStep)}
  
                    <div /* className={classes.buttons} */>
                      {activeStep !== 0 && (
                        <Button onClick={_handleBack}/*  className={classes.button} */>
                          Back
                        </Button>
                      )}
                      <div /* className={classes.wrapper} */>
                        <Button
                          onClick={_handleSubmit}
  
  
                          variant="contained"
                          color="primary"
                        /*     className={classes.button} */
                        >
                          {isLastStep ? 'Place order' : 'Next'}
  
                        </Button>
                        {isSubmitting && (
                          <CircularProgress
                            size={24}
  
                          />
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </React.Fragment>
        </React.Fragment>
        <Footer />
      </DashboardLayout>
    );
  }