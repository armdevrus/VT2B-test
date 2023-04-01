import React from "react";

export default function TariffTalk({ tariffValue, cb, cbActiveBtn }) {

  const handleChangeTariff = (e) => {
    cbActiveBtn(true);
    cb(e.target.value);
  };

  return (
    <table id="customers">
      <thead>
        <tr>
          <th>Продолжительность</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="radio"
              id="час"
              name="tariff"
              value="час"
              checked={tariffValue === "час" ? true : false}
              onChange={handleChangeTariff}
            />
            <label htmlFor="гость">1 час</label>
          </td>
          <td>200</td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              id="полдня"
              name="tariff"
              value="полдня"
              checked={tariffValue === "полдня" ? true : false}
              onChange={handleChangeTariff}
            />
            <label htmlFor="полдня">Пол дня (4часа)</label>
          </td>
          <td>500</td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              id="день"
              name="tariff"
              value="день"
              checked={tariffValue === "день" ? true : false}
              onChange={handleChangeTariff}
            />
            <label htmlFor="день">День</label>
          </td>
          <td>900</td>
        </tr>
      </tbody>
    </table>
  );
}
