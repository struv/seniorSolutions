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
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Interested in
                    <br />
                    Learning More
                  </>
                }
                description="We are happy to assist with all of your senior related needs"
              />
              <RotatingCardBack
                image={bgBack}
                title="Lets Talk Care"
                description="Send us a short message and we'll be happy to apply our knowledge and experience to your particular situation"
                action={{
                  type: "internal",
                  route: "./Contact.js#contact",
                  label: "contact us",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Hospice Care"
                  description="Focuses on comfort and emotional support for terminally ill patients and their families. Hospice care can be provided at home, in a hospice facility, or in a nursing home. It offers pain management, symptom control, and spiritual support during this difficult time."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Respite Stays"
                  description="Provides temporary care for your loved one in a senior living community, allowing family caregivers a well-deserved break. This can be helpful for planned events, vacations, or simply needing some time to recharge."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Assisted Living Waiver"
                  description="A government program that can help qualified seniors with limited financial resources afford the cost of assisted living. We can help you navigate the application process."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Other Needs"
                  description="We understand that senior care needs can be diverse. In addition to the services listed above, we can also help connect you with resources for transportation assistance, financial planning, legal services, and more."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
