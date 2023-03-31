import { useState } from "react";
import "./App.css";

function App() {
  const [service, setService] = useState("");
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
          type="number"
          id="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option disabled value="">
            Выберите услугу
          </option>
          <option value="рабочееместо">Рабочее место</option>
          <option value="конференцзал">Конференц-зал</option>
          <option value="переговорка">Переговорка</option>
        </select>
        <input type="submit" id="post" value="Отправить" />
      </form>
    </div>
  );
}

export default App;
