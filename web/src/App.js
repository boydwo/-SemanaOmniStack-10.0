import React, { useState, useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Main.css";
import "./Sidebar.css";
import api from "./services/api";
function App() {
  const [github_username, setGithub_username] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    //previnindo o comportamento do html
    e.preventDefault();

    const response = await api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });
    console.log(response.data);
  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do GitHUb</label>
            <input
              name='github_username'
              id='github_username'
              required
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
            />
          </div>

          <div className='input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input
              name='techs'
              id='techs'
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className='input-group'>
            <div className='input-block'>
              <label htmlFor='latitude'>Latitude</label>
              <input
                name='latitude'
                id='latitude'
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className='input-block'>
              <label htmlFor='longitude'>Latitude</label>
              <input
                name='longitude'
                id='longitude'
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
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
