import { useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import "./App.css";

function App() {
  const [service, setService] = useState("");
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [work, setWork] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(email, tel);
  };

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
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option disabled value="">
            Выберите услугу
          </option>
          <option value="рабочееместо">Рабочее место</option>
          <option value="конференцзал">Конференц-зал</option>
          <option value="переговорка">Переговорка</option>
        </select>
        {error && <h6 style={{ color: "red" }}>{error}</h6>}
        <input type="submit" id="post" value="Отправить" />
      </form>
    </div>
  );
}

export default App;
