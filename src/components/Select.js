import 'select2/dist/css/select2.min.css';
import Select from 'react-select';

const Select2 = (props) => {
   
  return (
    <Select 
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
            width: '100%'
}}
/>
)
}
    

export default Select2;