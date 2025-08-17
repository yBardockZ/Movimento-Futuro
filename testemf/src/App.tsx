import { useState } from 'react';
import './app.css'


function App() {
  const [email, setEmail] = useState<number>();
  const [senha, setSenha] = useState<number>(2058369);
  const [resp, setResp] = useState<number>(0);


  function entrar() {


    if (email === "movimentofuturo@gmail.com" && senha === "2058369") {
      setResp(1)

    } else {
      alert("Erro ao entrar")
    }

  }


  return (
    <section className='maiin'>
      {resp === 0 && (
        <div className='form'>
          <h1>MOVIMENTOo FUTuRO</h1>

          <div className='boxFormm'>
            <label>Email:</label>
            <input type="email"
             
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

          </div>

          <div className='boxForm'>
            <label>Senha:</label>
            <input type="text"
              
              value={senha}
              onChange={(e) => setSenha(e.target.value)} />
          </div>

          <button onClick={entrar}>Acessar</button>

        </div>
      )
      }



      {resp === 1 && (
        <section>
          <h1 className='resp1'>LOGADO COM SUCESSO</h1>
        </section>
      )}

    </section>
  )
}

export default App
