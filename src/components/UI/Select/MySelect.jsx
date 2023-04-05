import React from 'react'

const Select  = ({options, defaultValue, value, onChange}) => {
return(
  <select
  value = {value}
  onChange = {e => onChange(e.target.value)}  
  >
    <option disabled value = 'option1'>{defaultValue}</option>
    {options.map(optin => {
    return <option key = {optin.value}value = {optin.value}>{optin.name}</option>
    })}
  </select>
  )
}
export default Select