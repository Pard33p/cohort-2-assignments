export const CountDisplay = ({ count, countName }) => {
  return (
    <div className="box">
      <p style={{ fontSize: "20px" }}>
        <strong>{count}</strong>
      </p>
      <p style={{ fontSize: "15px" }}>{countName}</p>
    </div>
  );
};
