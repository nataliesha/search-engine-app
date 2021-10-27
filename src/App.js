import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
       <div className="container">
      <header className="App-header">
      <h1>Ask me something...</h1>
            </header>
            <main>
              <Dictionary defaultkeyword="magic"/>
            </main>
            <footer className="text-center"><small>Coded by Natalie Sharoni</small></footer>
      </div>
    </div>
  );
}


