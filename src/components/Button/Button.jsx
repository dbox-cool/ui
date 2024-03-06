/**
 * @param {String} label just a label
 * @returns {Element}
*/
const Button = ({label = "default"}) => {
  return (
    <button className="bg-emerald-300 text-main">{label}</button>
  )
}

export default Button