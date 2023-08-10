import './styled.css'

export function InputText({icon: Icon, label, placeholder, type, ...rest}) {
  return (
    <div {...rest}>
      <label>{label}</label>
      {Icon && <Icon size={28} />}
      <input type={type} placeholder={placeholder}/>
    </div>
  )
}