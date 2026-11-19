import "./style.css"
const TripBudget = () => {
  const [city, total, costTransport, costHouse, costFood] = [
    "Milan",
    5000,
    30,
    1500,
    200,
  ];
  const totalCosts = costFood + costHouse + costTransport;
  return (
    <ul>
      <li>Витрати: {totalCosts} euro</li>
      <li>Залишок коштів:{total - totalCosts} euro</li>
      <li>місто:{city}</li>
      <li>Буджет: {total} euro</li>
    </ul>
  );
};
export default TripBudget;
