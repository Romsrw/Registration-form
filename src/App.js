import React, { useEffect, useState } from "react";
import "./App.css";
import CustomCheckbox from "./Components/CustomCheckbox/CustomCheckbox";
import CustomInput from "./Components/CustomInput/CustomInput";
import CustomSelect from "./Components/CustomSelect/CustomSelect";

const languageOptions = [
  { label: "Русский", value: "RU" },
  { label: "Английский", value: "EN" },
  { label: "Китайский", value: "ZH" },
  { label: "Испанский", value: "ES" },
];

const App = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [language, setLanguage] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handlerName = (event) => {
    const regexName = /^[A-Za-zА-Яа-яЁё -]*$/;
    if (regexName.test(event.target.value)) {
      setName(event.target.value);
    }
  };

  const handlerEmail = (event) => {
    const regexEmail = /\S+@\S+\.\S+/;
    if (!!event.target.value && !regexEmail.test(event.target.value)) {
      setEmailError("Введено некорректное значение");
    } else {
      setEmailError("");
    }
    setEmail(event.target.value);
  };

  const handlerPhone = (event) => {
    const regexPhone =
      /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
    if (!!event.target.value && !regexPhone.test(event.target.value)) {
      setPhoneError("Введено некорректное значение");
    } else {
      setPhoneError("");
    }
    const regexInput = /^[0-9 () + -]*$/;
    if (regexInput.test(event.target.value)) {
      setPhone(event.target.value);
    }
  };

  const handlerBlur = (event) => {
    switch (event.target.name) {
      case "name":
        name ? setNameError("") : setNameError("Поле Имя не может быть пустым");
        break;
      case "email":
        email
          ? setEmailError("")
          : setEmailError("Поле Email не может быть пустым");
        break;
      case "phone":
        phone
          ? setPhoneError("")
          : setPhoneError("Поле Телефон не может быть пустым");
        break;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (
      !name ||
      nameError ||
      !email ||
      emailError ||
      !phone ||
      phoneError ||
      !language ||
      !checkbox
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    name,
    nameError,
    email,
    emailError,
    phone,
    phoneError,
    language,
    checkbox,
  ]);

  return (
    <div className="main">
      <div className="register-form-container">
        <h1 className="form-title">Регистрация</h1>
        <div className="form-description">
          <h3 className="description">
            Уже есть аккаунт?{" "}
            <a className="form-link" href="/">
              Войти
            </a>
          </h3>
        </div>
        <form className="form-fields" autoComplete="off">
          <CustomInput
            label="Имя"
            name="name"
            value={name}
            error={nameError}
            onChange={handlerName}
            onBlur={handlerBlur}
            placeholder="Введите Ваше имя"
          />
          <CustomInput
            label="Email"
            name="email"
            value={email}
            error={emailError}
            onChange={handlerEmail}
            onBlur={handlerBlur}
            placeholder="Введите Ваш email"
          />
          <CustomInput
            label="Номер телефона"
            name="phone"
            value={phone}
            error={phoneError}
            onChange={handlerPhone}
            onBlur={handlerBlur}
            placeholder="Введите номер телефона"
          />
          <CustomSelect
            label="Язык"
            name="language"
            value={language}
            options={languageOptions}
            onChange={(language) => setLanguage(language)}
          />
          <CustomCheckbox
            value={checkbox}
            onChange={() => setCheckbox((prev) => !prev)}
          />
          <button type="submit" disabled={!formValid} className="form-btn">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
