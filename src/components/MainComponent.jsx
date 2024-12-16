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
      <div className='btn-container'>
        {languages.map((element) => (
          <button
            key={element.id}
            className={`btn ${linguaggioSelezionato.id === element.id ? 'btn-warning' : 'btn-primary'}  m-2`}
            onClick={() => gestisciClickBottone(element)}>
            {element.title}
          </button>
        ))}
      </div>

      {/* fa vedere la card */}
      <div className="card mt-4 container-custom">
        <div className="card-body">
          <h4 className="card-title">{linguaggioSelezionato.title}</h4>
          <p className="card-text">{linguaggioSelezionato.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
