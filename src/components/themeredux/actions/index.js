import Toggle_Theme from "./actionsTypes";

function toggleTheme(theme) {
  let objtheme = {
    type: Toggle_Theme,
    payload: theme,
   
  };

  return objtheme;
}

export default toggleTheme;
