import React from "react";
import {useSelector , useDispatch} from "react-redux";
import toggleTheme from "./themeredux/actions"
 import Switch from "react-switch";
 import  { useState } from 'react';
 // import {ThemeContext} from '../components/theme-context';

// class Header extends React.Component{
function Header(){ 
const theme = useSelector (state =>state.themems)
// const checked = useSelector(state=>state.isChecked)

if(theme.name === "dark")
{
    
    var theme_option = "light";
}
else
{
     theme_option = "dark";
}




const dispatch=useDispatch();
const [checked, setChecked] = useState(false);     
return(

            <header className="Header " style={theme}>
            <p>PokeDex  </p>

<Switch 
            className="bu"
             type="button"
             onChange={() => 
                
                {
                    setChecked(!checked)
                    dispatch(toggleTheme(theme_option))
                }
            
            }
            //  checked={()=>dispatch(lastChecked)}
            checked={checked} 
            onColor="#86d3ff"
             onHandleColor="#2693e6"
             handleDiameter={15}
             uncheckedIcon={true}
             checkedIcon={true}
            //  height={20}
            //  width={45}
           
              /> 
      </header>
        )
    }
// }


export default Header;

