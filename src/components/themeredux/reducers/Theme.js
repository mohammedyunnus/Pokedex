import themes from "../themes";

const initialState = {
  colorData: themes.dark,
 
};
const theme_options = {
  dark: themes.dark,
  light: themes.light
};

function Theme(state = initialState, action, theme_option = theme_options) {


  // console.log("F.U")  
  // console.log(state,action,theme_option);
  switch (action.type) 
  {
    case "Toggle_Theme":
      switch (action.payload) {
        case "dark":
          // console.log("lol");
          return theme_option.dark;
        case "light":
          // console.log("lol");
          return theme_option.light;
        default:
          return theme_option.dark;  
      }
      // eslint-disable-next-line 
      break;
    default:
      return state.colorData;
  }
}
export default Theme;
