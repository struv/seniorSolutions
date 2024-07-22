/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
//import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12} id="about-us">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={16}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Independent Living"
                    description="Ideal for seniors who value their independence but appreciate the security and convenience of a senior living community. Offers private apartments, housekeeping, meals, and social activities."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Assisted Living"
                    description="Provides personalized support with daily tasks like bathing, dressing, medication management, and meals. Encourages independence while offering assistance for those who need it, fostering a social and engaging environment."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="warning"
                    title="Memory Care"
                    description="Specialized care in a secure setting designed to meet the unique needs of those with memory impairments. Offers structured routines, cognitive stimulation activities, and compassionate care that promotes safety and well-being."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="home"
                    title="Residential Care Home"
                    description="Provides a home-like atmosphere with a smaller number of residents. Offers assistance with daily living activities like bathing, dressing, and medication reminders, creating a familiar and comfortable environment. (Similar to assisted living with a more intimate feel)"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Boarding Care Home"
                    description="Basic care services in a shared living environment, often at a lower cost than assisted living. May offer meals, medication assistance, and supervision. (Regulations may vary by location)."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="alarm"
                    title="In-Home Care"
                    description="Non-medical care provided in the comfort of your own home. Caregivers can assist with daily tasks like bathing, dressing, meal preparation, medication reminders, and light housekeeping. They can also provide companionship and social interaction."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
