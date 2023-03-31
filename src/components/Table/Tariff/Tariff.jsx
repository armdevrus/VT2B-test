import "./Tariff.css";

export default function Tariff({ tariffValue, cb, cbActiveBtn }) {

    const handleChangeTariff = (e) => {
        cbActiveBtn(true)
        cb(e.target.value)
    }

  return (
    <table id="customers">
      <thead>
        <tr>
          <th>Тариф</th>
          <th>Продолжительность</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="radio"
              id="гость"
              name="tariff"
              value="гость"
              checked={tariffValue === "гость" ? true : false}
              onChange={handleChangeTariff}
            />
            <label htmlFor="гость">Гость</label>
          </td>
          <td>4 часа</td>
          <td>300</td>
        </tr>
        <tr>
          <td></td>
          <td>1 день</td>
          <td>400</td>
        </tr>
        <tr>
          <td></td>
          <td>1 месяц</td>
          <td>3500</td>
        </tr>
        <tr>
          <td></td>
          <td>3 месяц</td>
          <td>9000</td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              id="резидент"
              name="tariff"
              value="резидент"
              checked={tariffValue === "резидент" ? true : false}
              onChange={handleChangeTariff}
            />
            <label htmlFor="резидент">Резидент</label>
          </td>
          <td>1 месяц</td>
          <td>4500</td>
        </tr>
        <tr>
          <td></td>
          <td>3 месяц</td>
          <td>12000</td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              id="агентство"
              name="tariff"
              value="агентство"
              checked={tariffValue === "агентство" ? true : false}
              onChange={handleChangeTariff}
            />
            <label htmlFor="агентство">Агентство</label>
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
