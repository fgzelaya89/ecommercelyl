import { useContext } from "react";
import { themeContext } from "../App1";

const BotonConNumero = ({ numero = 0 , estadoBander=true}) => {

    const btnThemeContext = useContext(themeContext);
    return (
      <div>
        Número: {numero} 
        <br />
        estadoBander: {estadoBander?"True":"False"}
        <br />
        btnThemeContext :{btnThemeContext}
      </div>
    );
  };
  
  export default BotonConNumero;