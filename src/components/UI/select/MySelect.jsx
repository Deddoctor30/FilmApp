const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
   <select 
      onChange={event => onChange(event.target.value)}
      name="select" 
      id="1"
      >
      {/* <option disabled value="value1">{defaultValue}</option> */}
      {options.map((option, i) => 
         <option key={i} value={option}>{option}</option>)}
   </select>  
  )
}

export default MySelect