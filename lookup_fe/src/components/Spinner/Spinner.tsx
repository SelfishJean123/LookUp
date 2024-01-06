import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className='spinner-component'>
      <div className='spinner-border text-secondary' style={{ width: "4rem", height: "4rem" }} role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
