import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="app">
       <div className="container">
      <header className="app-header">
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


