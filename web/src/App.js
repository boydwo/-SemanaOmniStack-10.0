import React from "react";
import "./global.css";
import "./App.css";
import "./Main.css";
import "./Sidebar.css";

function App() {
  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do GitHUb</label>
            <input name='github_username' id='github_username' required />
          </div>

          <div className='input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input name='techs' id='techs' required />
          </div>

          <div className='input-group'>
            <div className='input-block'>
              <label htmlFor='latitude'>Latitude</label>
              <input name='latitude' id='latitude' required />
            </div>

            <div className='input-block'>
              <label htmlFor='longitude'>Latitude</label>
              <input name='longitude' id='longitude' required />
            </div>
          </div>

          <button>Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img
                src='https://avatars3.githubusercontent.com/u/40392208?s=460&v=4'
                alt='Marcos Tulio'
              />
              <div className='user-info'>
                <strong>Marcos Túlio</strong>
                <span> ReactJs, Reat Native, Node.js</span>
              </div>
            </header>
            <p>
              A young technology lover with ambitious dreams. FullStack
              developer.
            </p>
            <a href='https://github.com/boydwo'>acessar perfil no github</a>
          </li>

          <li className='dev-item'>
            <header>
              <img
                src='https://avatars3.githubusercontent.com/u/40392208?s=460&v=4'
                alt='Marcos Tulio'
              />
              <div className='user-info'>
                <strong>Marcos Túlio</strong>
                <span> ReactJs, Reat Native, Node.js</span>
              </div>
            </header>
            <p>
              A young technology lover with ambitious dreams. FullStack
              developer.
            </p>
            <a href='https://github.com/boydwo'>acessar perfil no github</a>
          </li>

          <li className='dev-item'>
            <header>
              <img
                src='https://avatars3.githubusercontent.com/u/40392208?s=460&v=4'
                alt='Marcos Tulio'
              />
              <div className='user-info'>
                <strong>Marcos Túlio</strong>
                <span> ReactJs, Reat Native, Node.js</span>
              </div>
            </header>
            <p>
              A young technology lover with ambitious dreams. FullStack
              developer.
            </p>
            <a href='https://github.com/boydwo'>acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
