import { useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import "./App.css";
import Tariff from "./components/Table/Tariff/Tariff";
import TariffTalk from "./components/Table/TariffTalk/TariffTalk";

function App() {
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [work, setWork] = useState("");
  const [error, setError] = useState(null);
  const [service, setService] = useState("");
  const [tariff, setTariff] = useState(null);
  const [activeButton, setActiveButton] = useState(false);
  const [hoursRent, setHoursRent] = useState(0);
  
  function validate(email, phone) {
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validEmail)) {
      if (isValidPhoneNumber(phone)) {
        setError(null);
      } else {
        setError("Invalid phone number!");
      }
    } else {
      setError("Invalid email address!");
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(email, tel);
  };

  const handleChangeSevice = (e) => {
    setService(e.target.value);
    setTariff(null);
    setHoursRent(0);
    setActiveButton(false);
  };

  const handleChangeHoursRent = (e) => {
    const newHourValue = e.target.value;
    setHoursRent(newHourValue);
    if (newHourValue) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Оплата</h2>
        <label htmlFor="person">ФИО:</label>
        <input
          type="text"
          id="person"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="tel">Телефон:</label>
        <input
          type="text"
          id="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <label htmlFor="work">Вид деятельности:</label>
        <input
          type="text"
          id="work"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
        <select value={service} onChange={handleChangeSevice}>
          <option disabled value="">
            Выберите услугу
          </option>
          <option value="рабочееместо">Рабочее место</option>
          <option value="конференцзал">Конференц-зал</option>
          <option value="переговорка">Переговорка</option>
        </select>
        {error && <h6 style={{ color: "red" }}>{error}</h6>}
        {service === "рабочееместо" ? (
          <Tariff
            tariffValue={tariff}
            cb={setTariff}
            cbActiveBtn={setActiveButton}
          />
        ) : service === "переговорка" ? (
          <TariffTalk
            tariffValue={tariff}
            cb={setTariff}
            cbActiveBtn={setActiveButton}
          />
        ) : service === "конференцзал" ? (
          <>
            <h4>1 час = 500 руб.</h4>
            <label>
              Выберите срок аренды
              <select
                className="select"
                value={hoursRent}
                onChange={handleChangeHoursRent}
              >
                <option value="">-</option>
                <option value={1}>1 час</option>
                <option value={2}>2 часа</option>
                <option value={3}>3 часа</option>
                <option value={4}>4 часа</option>
                <option value={5}>5 часов</option>
                <option value={6}>6 часов</option>
                <option value={7}>7 часов</option>
                <option value={8}>8 часов</option>
              </select>
            </label>
            <h4 className="title__select">Cумма: {500 * hoursRent} руб.</h4>
          </>
        ) : null}
        <input
          type="submit"
          id="post"
          value="Оплатить"
          disabled={!activeButton}
          style={{
            backgroundColor: activeButton ? "#e4685d" : "gray",
          }}
        />
      </form>
    </div>
  );
}

export default App;
