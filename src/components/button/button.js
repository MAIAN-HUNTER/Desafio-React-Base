const color = "yellow"

const lembrete = () => {
    alert('Já treinou hj, Frango?🐔')
}

const Button = (props) => {
    return <button 
    style={{background: color}}
    className= 'btn' 
    onClick={lembrete}>{props.label}
            </button>
}

Button.defaultProps = {
    label: '⚠️Warning⚠️'
}

export default Button