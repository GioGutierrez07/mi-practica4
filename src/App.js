import React from 'react';
import TablaConIconos from './componentes/TablaConIconos';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tabla con Iconos</h1>
      </header>
      <main>
        <TablaConIconos />
      </main>
    </div>
  );
};

export default App;
