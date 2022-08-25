const Lists = ({ lists, setLists }) => {
  const selection = (e) => {
    setLists(e.target.value);
  };

  return (
    <select name="" id="" onChange={selection} className="form-select mt-2">
      <option value="All" defaultChecked>
        All Tasks
      </option>
      <option value="Completed">Completed</option>
      <option value="Uncompleted">Uncompleted</option>
    </select>
  );
};

export default Lists;
