import './CustomInput.css';

const CustomInput = ({ label, name, error, value, placeholder, onChange, onBlur }) => {
    return (
        <div className='form-field'>
            <label htmlFor={name}
                className='input-label' >{label}</label>
            <input
                type='text'
                className='form-input'
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && (
                <span className='form-field__error' >{error}</span>
            )}
        </div>

    )
};

export default CustomInput;