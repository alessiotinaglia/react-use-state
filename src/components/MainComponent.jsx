import { useState } from 'react';

const MainComponent = ({ languages }) => {
  const [linguaggioSelezionato, setLinguaggioSelezionato] = useState(languages[0]); 

  // gestisce il click dei bottoni
  const gestisciClickBottone = (linguaggio) => {
    setLinguaggioSelezionato(linguaggio);
  };

  return (
    <div>
      {/* fa vedere i bottoni con html /css ecc... */}
      {languages.map((element) => (
        <button 
          key={element.id} 
          className="btn btn-primary m-2"
          onClick={() => gestisciClickBottone(element)}
        >
          {element.title}
        </button>
      ))}
      {/* fa vedere la card */}
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">{linguaggioSelezionato.title}</h5>
          <p className="card-text">{linguaggioSelezionato.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
