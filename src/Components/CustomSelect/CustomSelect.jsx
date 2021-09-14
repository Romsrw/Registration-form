import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import "./CustomSelect.css";

const CustomSelect = ({ label, name, options, value, onChange }) => {
  const listRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickLable = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOption = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && listRef.current) {
      listRef.current.focus();
    }
  }, [isOpen, listRef]);

  return (
    <div
      className="select"
      ref={listRef}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
    >
      <label className="select-label" htmlFor={name}>
        {label}
      </label>
      <div
        name={name}
        className={classNames(
          "select-lable-field",
          !!value && "select-lable-field_active",
          isOpen && "select-lable-field_open"
        )}
        onClick={handleClickLable}
      >
        {value ? options.find((option) => option.value === value).label : label}
      </div>
      {isOpen && (
        <div className="select-dropdown">
          {options.map((option) => (
            <div
              className={classNames(
                "select-dropdown-field",
                option.value === value && "select-dropdown-field_selected"
              )}
              onClick={() => handleClickOption(option.value)}
              key={option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
