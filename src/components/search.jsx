import { useContext, useState } from "react";
import "./search.css"
import LanguageContext from "../context/language";
function Search(props) {
    const { handleSearch } = props;
    const [name, setName]  = useState('');
    const handleChange = (e) =>{
        setName(e.target.value);
    }
    const handleClear = () =>{
        handleSearch(setName(''));
    }
    const {language} = useContext(LanguageContext)
    return (<>
        <input className = "searchBar" value={name} onChange={handleChange}/>
        <button className = "searchButton" onClick={()=>handleSearch(name)}>{language === 'ar'? "بحث": "Search" }</button>
        <button className = "clearButton" onClick={()=>handleClear()} style={name=== '' ? {display:"none"} : {}}>{language === 'ar'? "إزالة": "Clear" }</button>
    </>  );
}

export default Search;