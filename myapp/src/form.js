



function App() {
    return (


<header><!-- inicio Cabecalho -->
      <nav className="navbar navbar-expand-sm navbar-light bg-info">
        <div className="container">
          
          <a href="index.html" className="navbar-brand">
            <img src="img/logo.png" width="142">
          </a>

          <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav-principal">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="index.html" className="nav-link">Home</a>
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









		<form>
            <div className="container">
                <div className="py-3 text-center">
                    <img className="mb-6" src="img/logo.png">
                    <h2></h2>
                </div>
                <div className="row">      
                    <div className="col-md-12 order-md-1">
                        <form className="needs-validation" novalidate>
                            <div className="row">
                                <div className="col-md-2 mb-3">
                                </div>
                                
                                <div className="col-md-2 mb-3">
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label for="oriAtendimento">Perfil do usuário</label>
                                    <select className="custom-select d-block w-100" id="oriAtendimento" name="oriAtendimento"  onchange="changeOrigemAtendimento();" required>
                                        
                                        <option value="CPF">PESSOA FÍSICA</option>
                                        <option value="CNPJ">EMPRESARIAL</option>
                                    </select>
                                    
                                    </div>
                                </div>
                           		

                                    </div>
                                </div>

                                <div className="row">
                                    
                                    
                                    <div className="col-md-5 mb-3">
                                        <label>Nome completo</label>
                                        <input type="text" className="form-control">
                                        
                                    </div>

                                
                                    <div className="col-md-3 mb-3">
                                        <label>CPF/CNPJ</label>
                                        <input type="text" className="form-control">
                                    </div>
                                    <div className="col-md-5 mb-3">
                                        <label>Email</label>
                                        <input type="text" className="form-control">
                                        
                                    </div>
                                </div>  

                                <div className="row">
                                    

                                    <div className="col-md-2 mb-3">
                                        <label for="conProposta">CEP</label>
                                        <input type="text" className="form-control">
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label for="ocoCriada">Endereço</label>
                                        <input type="text" className="form-control">
									</div>

                                </div>

                                <div className="row">
                                    <div className="col-md-2 mb-3">
                                        <label for="conProposta">Estado</label>
                                        <input type="text" className="form-control">
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label for="ocoCriada">Cidade</label>
                                        <input type="text" className="form-control">
									</div>

                                    
                                </div>

                                <div className="row" id="row5" name="row5">
                                    <div className="col-md-6 mb-3">
                                        <label for="venAceitou">Como você conheceu o Finans?</label>
                                        <select className="custom-select d-block w-100" >
                                            <option value="SELECIONE:">SELECIONE</option>
                                            <option value="Sociais">Redes sociais</option>
                                            <option value="Socio">Indicação de um sócio</option>
                                            <option value="Outros">De outras formas</option>
                                        </select>
                                    
                                                                                                 
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                    	<br>
                                        <label for="txObservacao">OBSERVAÇÕES:</label>
                                        <input type="text" className="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mb-2">
                <button className="btn btn-primary btn-lg btn-block" type="button">Finalizar Cadastro</button>
            </div>
        </form>

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
  </div>
</div>
</div>
</form>
);
}

export default App;