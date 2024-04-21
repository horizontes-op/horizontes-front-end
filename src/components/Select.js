import 'select2/dist/css/select2.min.css';
import Select from 'react-select';

const Select2 = (props) => {
   
  return (
    <Select className='select2-container'
        isMulti = {props.isMulti}
        value={props.linesSelected}
        onChange={props.handleChangeLineSelect}
        closeMenuOnSelect={props.isMulti ? false : true}
        options={ props.lines.map(item => {
            return {value: item, label : item }
        }) }
        hideSelectedOptions={false}
        isSearchable = {false}
        placeholder= {props.placeholder}
        styles={{
        menu: (provided, state) => ({
            ...provided,
            
            zIndex: 1, 
            maxWidth: '400px',
        
        }),
}}
/>
)
}
    

export default Select2;