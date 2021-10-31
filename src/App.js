import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Dictionary from './Dictionary';
import Header from './Header';

export default function App() {
  return (
    <div className="app">
       <div className="container">
      <header className="app-header">
        <Header />
            </header>
            <main>
              <Dictionary defaultkeyword="magic"/>
            </main>
            <footer className="text-center"><small>Coded by Natalie Sharoni</small></footer>
      </div>
    </div>
  );
}


