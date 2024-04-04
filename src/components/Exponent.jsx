const Component = ({ num, exponent }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{num}</p>
      <p className="exponent-result">
        2 * 2 * 2 * 2 * 2 = <span className="total">{num ** exponent}</span>
      </p>
    </div>
  );
};

export default Component;
