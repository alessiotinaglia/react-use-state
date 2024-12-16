
const MainComponent = ({ languages }) => { 
  return (
    <div>
      {languages.map(element => (
        <button key={element.id} className="btn btn-primary m-2">
          {element.title}
        </button>
      ))}
    </div>
  );
};

export default MainComponent;
