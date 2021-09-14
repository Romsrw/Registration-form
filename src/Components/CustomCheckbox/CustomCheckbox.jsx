import './CustomCheckbox.css';

const CustomCheckbox = ({ value, onChange }) => {
    return (
        <div className='form-field-chexbox'>
            <input
                value={value}
                onChange={onChange}
                type='checkbox'
                className='checkbox'
                id='checkbox_1'
            />
            <label
                className='checkbox-label'
                htmlFor='checkbox_1'
            >Принимаю <a className='form-link' href='/'>условия</a> использования
            </label>
        </div>
    )
};

export default CustomCheckbox;