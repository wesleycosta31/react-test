import logo from './img/logo.png';
import capaMulher from './img/capa-mulher.png';
import economize from './img/economize.png';
import facil from './img/facil.png';
import juros from './img/juros.png';
import saiba from './img/saiba.png';
import suporte from './img/suporte.png';

import './App.css';

function App() {
  return (
    <main className="App">
      <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-warning">
        <div className="container">
          
          <a href="#" className="navbar-brand">
            <img src={logo} width="142"/>
          </a>

          <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav-principal">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Recursos</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Benefícios</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Preços</a>
              </li>
              <li className="nav-item">
                <a href="" className="btn btn-outline-light ml-4">Entrar</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
    <section className="font-weight-light text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex"> 
              <div className="align-self-center">
                <h1 className="display-3" >
                Suas contas, <br/> descomplicadas
                </h1>
                <p className="lead font-weight-bold">Usado por mais de 1 milhão de pessoas, o Finans é uma ferramenta online que vai facilitar sua vida financeira.
                </p>
                <form className="mt-4 mb-4">
                  <div className="input-group input-group-lg">
                  
                    <div className="input-group-append">
                      <a className="btn btn-primary" href="form.html" role="button">Cadastre-se</a>
                      
                  </div>
                </div>
              </form>
              <p className="mt-4 lead text-black-50">Disponivel para 
                <a href="" className="btn btn-outline-dark ml-2">
                  <i className="fa-brands fa-android fa-lg"></i>
                </a>
                <a href="" className="btn btn-outline-dark ml-2">
                  <i className="fa-brands fa-apple fa-lg"></i>
                </a>
              </p>
              </div>
              <div className="col-md-6 d-none d-md-block " > 
                <img src={capaMulher}/>
              </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white text-dark"> 
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="align-self-center">
              <h2 className="display-4" >
              Saiba para onde vai o seu dinheiro
              </h2>
              <p className="lead font-weight-light">Com o Finans, você categoriza todos os seus lançamentos com gráficos simples, você sabe de onde vem e para onde vai todo o seu dinheiro.
              </p>
              <a href="" className="btn btn-primary">Saiba mais</a>
            </div>
            </div>
              <div className="col-md-6 d-none d-md-block mt-5" >
                <img src={saiba} className="img-fluid"/>
              </div>  
            </div>  
          </div>
      </section>

      <section className="bg-white text-dark"> 
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="align-self-center">
              <img src={juros} className="img-fluid"/>
            </div>
            </div>
              <div className="col-md-6  d-md-block mt-5" >
                <h2 className="display-4" >
              Pare de pagar juros e economize
              </h2>
              <p className="lead font-weight-light">Manter as contas em dia é sempre um problema? O Finans avisa você: receba alertas de contas a pagar e a receber! 
              </p>
              <a href="" className="btn btn-primary">Saiba mais</a>
              </div>  
            </div>  
          </div>
    </section>
    <section className="bg-white text-dark"> 
    <div className="container">
      <div className="row">
        <div className="col-md-4"> 
          <img src={facil}  className="img-fluid"/>
          <h2>Fácil de usar</h2>
          <p>O Finans vai além do básico e permite que você faça controles incríveis e essenciais para suas finanças. Simples como tem que ser.</p>
        </div>
        <div className="col-md-4 img-fluid">
          <img src={economize} className="img-fluid"/>
          <h2>Economize seu tempo</h2>
          <p>O Tempo é dinheiro! Em segundos você tem tudo sob controle e pode aproveitar seu tempo com o que realmente importa pra você!</p>
        </div>
        <div className="col-md-4 img-fluid">
          <img src={suporte} className="img-fluid"/> 
          <h2>Suporte amigo</h2>
          <p>Dúvidas ou perguntas? Nosso suporte super atencioso ajuda você! Nós estamos aqui 24h para solucionar qualquer problema.</p>
        </div>
      </div>
    </div>
  </section>
<footer className="mt-4 mb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <p>
              <a href="">Home</a>
              <a href="">Recursos</a>
              <a href="">Benefícios</a>
              <a href="">Preços</a>
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <a href="" className="btn btn-outline-dark">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" className="btn btn-outline-dark ml-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="btn btn-outline-dark ml-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="btn btn-outline-dark ml-2">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </main>
  );
}

export default App;
