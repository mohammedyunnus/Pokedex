// import React from "react";

// const themes = {
//   dark: {
//     backgroundColor: 'black',
//     color: 'white'
//   },
//     light: {
//       backgroundColor: 'white',
//       color: 'black'
//     }
//   }

//   const initialState = {
//     light: false,
//     theme: themes.light,
//     toggle: () => {}
//   }
//   const ThemeContext = React.createContext(initialState)

//   function ThemeProvider({ children }) {
//     const [light, setLight] = React.useState(false) // Default theme is light
  
//     // On mount, read the preferred theme from the persistence
//     React.useEffect(() => {
//       const isLight = localStorage.getItem('light') === 'true'
//       setLight(isLight)
//     }, [light])
  
//     // To toggle between dark and light modes
//     const toggle = () => {
//       const isLight = !light
//       localStorage.setItem('light', JSON.stringify(isLight))
//       setLight(isLight)
//     }
  
//     const theme = light ? themes.light : themes.dark
  
//     return (
//       <ThemeContext.Provider value={{ theme, light, toggle }}>
//         {children}
//       </ThemeContext.Provider>
//     )
//   }
  
//   export { ThemeProvider, ThemeContext }