import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const fontBold = 700;

// Create a theme instance.
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  palette: {
    primary: { main: "#40464D", contrastText: "#FFFFFF" },
    secondary: { main: "#F48A88" },
    text: { main: "#333333" },
    common: { beige: "#FBF8ED" },
    footer: { main: "#262626" },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    // fontWeightLight: 400,
    // fontWeightBold: 700,
    h1: {
      fontSize: 60,
      fontWeight: fontBold,
    },
    h2: {
      fontSize: 32,
      fontWeight: fontBold,
    },
    h3: {
      fontSize: 20,
      fontWeight: fontBold,
    },
    h4: {
      fontSize: 18,
      fontWeight: fontBold,
    },
    h5: {
      fontSize: 16,
      fontWeight: fontBold,
    },
    h6: {
      fontSize: 12,
      fontWeight: fontBold,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: fontBold,
    },
    subtitle2: {
      fontSize: 12,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontWeight: fontBold,
      // fontFamily: "Nunito",
      fontSize: 16,
      textTransform: "none",
    },
  },
});
theme.components = {
  MuiButton: {
    // TODO: update hover, active pseudo class
    styleOverrides: {
      root: {
        borderRadius: 100,
        height: 54,
        paddingLeft: 48,
        paddingRight: 48,
        paddingTop: 16,
        paddingBottom: 16,
        // mobile button
        [theme.breakpoints.down("md")]: {
          height: 43,
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 12,
          paddingBottom: 12,
        },
        backgroundColor: "#40464D",
        color: "#FFFFFF",
      },
      outlined: {
        backgroundColor: "transparent",
        color: "#FAF6E8",
        borderColor: "#FAF6E8",
        borderWidth: 2,
      },
    },
  },
};

theme = responsiveFontSizes(theme);

export default theme;





// import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// // Create a theme instance.
// let theme = createTheme()
// theme = createTheme(theme , {
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1280,
//       xl: 1536,
//     },
//   },
//   palette: {
//     primary: { main: '#40464D', contrastText: '#FFFFFF' },
//     secondary: { main: '#F48A88' },
//     text: { main: '#333333' },
//     common: { beige: '#FBF8ED' },
//     footer: { main: '#262626' }
//   },
//   typography: {
//     fontFamily: ['Nunito', 'sans-serif'].join(','),
//     fontWeightLight: 400,
//     fontWeightBold: 700,
//     h1: {
//       fontSize: 60
//     },
//     h2: {
//       fontSize: 32,
//     },
//     h3: {
//       fontSize: 20,
//     },
//     h4: {
//       fontSize: 18,
//     },
//     h5: {
//       fontSize: 16,
//     },
//     h6: {
//       fontSize: 12,
//     },
//     subtitle1: {
//       fontSize: 16,
//     },
//     subtitle2: {
//       fontSize: 12,
//     },
//     body1: {
//       fontSize: 16,
//     },
//     body2: {
//       fontSize: 14,
//     },
//     button: {
//       fontWeight: 700,
//       fontFamily: 'Nunito',
//       fontSize: 16,
//       textTransform: "none",
//       fontFamily: 'Nunito'
//     },
//   },
//   components: {
//     MuiButton: {
//       // TODO: update hover, active pseudo class
//       styleOverrides: {
//         root: {
//           borderRadius: 100,
//           height: 54,
//           paddingLeft: 48,
//           paddingRight: 48,
//           paddingTop: 16,
//           paddingBottom: 16,
//           // mobile button
//           [theme.breakpoints.down('md')]: {
//             height: 43,
//             paddingLeft: 32,
//             paddingRight: 32,
//             paddingTop: 12,
//             paddingBottom: 12,
//           },
//           backgroundColor: '#40464D',
//           color: '#FFFFFF'
//         },
//         outlined: {
//           backgroundColor: 'transparent',
//           color: '#FAF6E8',
//           borderColor: '#FAF6E8',
//           borderWidth: 2,
//         }
//       },
//     }
//   }
// });

// theme = responsiveFontSizes(theme);

// export default theme;