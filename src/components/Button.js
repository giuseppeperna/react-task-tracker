import PropTypes from "prop-types";

const Button = ({color, text, onClick, showAdd}) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color}}
            className='btn'>
            {showAdd ? 'Close' : text}
        </button>
    );
};

Button.defaultProps = {
    color: 'black',
    text: 'Add'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button;