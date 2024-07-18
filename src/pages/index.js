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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
//import MKButton from "components/MKButton";

// Material Kit 2 React examples
//import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// About Us page sections
import Intro from "pages/sections/Intro";
import Information from "pages/sections/Information";
import Information2 from "pages/sections/Information2";
//import Team from "pages/sections/Team";
//import Featuring from "pages/sections/Featuring";
//import Newsletter from "pages/sections/Newsletter";
import Header from "pages/sections/header1.js";
//import Features from "pages/sections/Features";
import Posts from "pages/sections/Posts";
import Contact from "pages/sections/Contact";
import Footer from "pages/sections/Footer";
// Routes
//import footerRoutes from "footer.routes";

// Images
/* import bgImage from "assets/images/seniors/dance.jpg"; */

function AboutUs() {
  return (
    <>
      <Header />
      {/* <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Welcome to JS Senior Solutions
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Providing quality concierge services to Seniors and their families with the
              professional guidance, support, and care they deserve. We look forward to helping you.
            </MKTypography>
            <MKButton
              component="a"
              color="default"
              href="mailto:jsseniorsolutions@gmail.com?subject=JS Senior Solutions Inquiry"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
            >
              email us
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox> */}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Features /> */}
        <MKBox component="section" py={4}>
          <Grid container alignItems="center" py={0}>
            <Grid item xs={12} sm={90}>
              <MKTypography variant="h2" textAlign="Center">
                Services
              </MKTypography>
            </Grid>
          </Grid>
        </MKBox>

        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Assesment Services"
                description="Our personalized assessments help identify your loved one's needs, preferences, and lifestyle goals to ensure a seamless transition to the ideal senior living environment."
                action={{
                  type: "external",
                  route: "#",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Care Management"
                description="Let us navigate the complexities of senior care. Our care managers provide ongoing support, advocate for your loved one's well-being, and ensure their needs are consistently met."
                action={{
                  type: "external",
                  route: "#",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Placement Services"
                description="We take the stress out of finding the perfect senior living community. Our extensive network and expert knowledge allow us to match your loved one with the ideal setting that fosters independence and happiness."
                action={{
                  type: "external",
                  route: "#",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Intro />
        <Information />
        <Information2 />
        <Posts />
        {/* <Team />
        <Featuring /> */}
        <Contact />
        <Footer />
      </Card>
      {/* <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox> */}
    </>
  );
}

export default AboutUs;
