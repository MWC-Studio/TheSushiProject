import * as React from "react";
import { Grid, Typography, Container } from "@mui/material";
import MuiNextLink from "@components/MuiNextLink";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useTheme, useMediaQuery } from "@mui/material";

const AboutPage = (isMobile) => {
  const themes = useTheme();
  const isTablet = useMediaQuery(themes.breakpoints.down("lg"));
  return (
    <Container
      justify="center"
      direction="column"
      justifycontent="center"
      alignItems="center"
      xl={12}
      lg={12}
      xs={12}
      sm={12}
      sx={{ mb: 3, mt: 3 }}
    >
      <Grid
        container
        flexDirection="column"
        justifycontent="center"
        alignItems="center"
        sx={{ mb: 3, mt: 3 }}
      >
        <Grid
          item
          flexDirection="column"
          justifycontent="center"
          alignItems="center"
          sx={{ mb: 2, mt: 4 }}
        >
         <Typography  fontWeight= 'bold' textAlign="center" color="#F48A88" gutterbottom="true" py={1}>
         Fresh, Various, and Authentic
        </Typography>
        <Typography
          color="text"
          variant="h2"
          align="center"
          fontWeight={"fontWeightBold"}
          fontFamily={"Nunito"}
          sx={{ mb: 8}}
        >
          That’s How We’re Rollin’
        </Typography>
        {/*Image*/}
         <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={12}
        md={12}
        sm={12}
        xs={12}
        > 
          <Image
            src="/aboutpage/about_img.svg"
            alt="Cooking"
            width={592}
            height={420}
          />
        </Grid>
      </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="left"
          width={596}
        > 
          <Typography variant="body1" textAlign="left" color="#333333" pt={4}>
          Your friendly neighborhood sushi place is here! Founded by June Kim - the Chef CEO, Sushi Rollin has served delicious rolls and premium sushi to fellow Texans since 2019. Our day starts by preparing items with freshly sourced ingredients. We strive to provide a warm atmosphere that encourages people to connect with their community while enjoying delicious rolls. Our team puts a lot of effort into providing excellent service that makes customers feel welcome and comfortable.
          <br/><br/>
          If you’re friendly, hardworking, and ambitious, please join our team at Sushi Rollin’! We are also now focusing on expanding our franchise opportunities for those looking for a low start-up cost business. Chef CEO June will be offering one-on-one training sessions and sharing special skills that he learned from his own experience as a head sushi chef at one of the best fine-dining sushi restaurants in town. Please reach out for more details if you are interested!
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="left"
          width={596} //596으로 하면 줄이 3줄이 됨 604부터 2줄
        > 
          <Typography variant='body1' fontStyle='italic' color="333333" textAlign="center" pt={8}>
          “When people think about Sushi, It’s pricey and not an everyday kind of experience. But with Sushi Rollin, the experience gets more approachable but still unique."
          </Typography>
          <Typography variant='body1' color="333333" textAlign="center" pt={2}>
          -The Chef CEO, June Kim-
          </Typography>
        </Grid>
          <MuiNextLink href="/franchise" underline="none" sx={{ mt: 8 }} >
            <Button> Franchise Opportunity</Button>
          </MuiNextLink>
          <MuiNextLink href="/menu" underline="none" sx={{ mt: 4, mb: 8 }}>
            <Button 
            style={{maxWidth: '263px', minWidth: '263px'}}
            variant="outlined" // black outline
            sx={{ 
              backgroundColor: "white",
              borderColor: "primary.main",
              color: "primary.main",
            }}
          >
            View Our Menu
          </Button>
        </MuiNextLink>
      </Grid>
    </Container>
  );
};
export default AboutPage;
