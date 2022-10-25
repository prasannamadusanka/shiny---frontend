/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/serviceproviders/components/Details";

export const newservicepro = async pay => {
  const paynow = await API.get('manager/view_req_serviceprovider');
  console.log(response.data.Requests);
  return response.data.Requests;
};




function Request() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "manager");

    return () => setDirection(dispatch, "ltr");
  }, []);
  

  const [newrequest, setevent] = useState([]);
  useEffect(() => {
    newservicepro().then(data => {
      console.log(data)
      setevent(data)
        console.log(newrequest)
    }).catch(err => {
      
    })
  }, []);

  return (
    <Card id="delete-account">
     
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
        {newrequest.map((item,index)=>{
                return(
          <Bill
            name={item.name}
            person="Nimal Perera"
            email={item.email}
            vat="07458645621"
            service="Ashtaka"
            account="xxxxxxxxxxxx"
          />
          );
                
              })}
          <Bill
            name="lucas Dancing Group"
            person="Janani Amani"
            email="lucas@stone-tech.com"
            vat="07158645621"
            service="Jayamangala Gatha"
            account="xxxxxxxxxxxx"
          />
          <Bill
            name="Kalyani Dancing Group"
            person="Kamal Perera"
            email="kalyani@fiber.com"
            vat="07458645586"
            service="Dancing Group"
            account="xxxxxxxxxxxx"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Request;
