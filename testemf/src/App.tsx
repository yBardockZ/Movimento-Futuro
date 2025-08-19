import { useState } from 'react';
import './app.css'


function App() {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [resp, setResp] = useState<number>(0);


  function entrar() {


    if (email === "movimentofuturo@gmail.com" && senha === "2058369") {
      setResp(1)

    } else {
      alert("Erro ao entrar")
    }

  }


  return (
    <section className='main'>
      {resp === 0 && (
        <div className='form'>
          <h1>MOVIMENTO FUTURO</h1>

          <div className='boxForm'>
            <label>Email:</label>
            <input type="email"
             
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Digite seu email' 
              />

          </div>

          <div className='boxForm'>
            <label>Senha:</label>
            <input type="text"
              
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder='Digite sua senha' 
              />
          </div>

          <button onClick={entrar}>Entrar</button>

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
