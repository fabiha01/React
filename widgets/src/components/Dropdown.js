const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {

    // if the selected value is equal to the option value return null
    if ( selected.value === option.value ) {
      return null;
    }

    return (
      <div onClick={() => onSelectedChange(option)} key={option.value} className="item">
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};
 
export default Dropdown;