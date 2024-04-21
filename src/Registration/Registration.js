import React, { useState } from "react";
import "./Registration.css";
import image from '../images/logo.jpeg'
import Select2 from "../components/Select";
const Registration = () => {

  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [genero, setGenero] = useState(["Masculino", "Feminino", "Outro"])
  const [data_nascimento, setDataNascimento] = useState("")
  const [renda_per_capita, setRenda_per_capita] = useState("")
  const [generoSelected, setGeneroSelected] = useState([])


  // segunda tela
  const [cep, setCep] = useState("")
  const [escolaridade, setEscolaridade] = useState(["Nono ano", "1º Ano E.M", "2º Ano E.M", "3º Ano E.M", "Supletivo", "Ensino técnico"])
  const [ocupacao, setOcupacao] = useState("")
  const [estudaEstudou, setEstudaEstudou] = useState(["Escola pública", "Escola privada com bolsa", "Escola privada sem bolsa"])
  const [escolaridadeSelected, setEscolaridadeSelected] = useState([])
  const [estudaEstudouSelected, setEstudaEstudouSelected] = useState([])

  // terceira tela


  const [modalidade, setModalidade] = useState(["Presencial", "Remoto", "Híbrido"])
  const [area_interesse, setArea_interesse] = useState("")
  const [buscaOportunidade, setBuscaOportunidade] = useState(["Acadêmica", "Trabalho", "Extra curricular"])
  const [descricao, setDescricao] = useState("")
  const [turnoDisponivel, setTurnoDisponivel] = useState(["Manhã", "Tarde", "Noite"]);
  const [disponibilidade, setDisponibilidade] = useState(["Mesma cidade", "Mesmo estado", "Outro estado", "Mesmo país", "Outro país"]);
  const [disponibilidadeSelected, setDisponibilidadeSelected] = useState([]);
  const [turnoDisponivelSelected, setTurnoDisponivelSelected] = useState([]);
  const [buscaOportunidadeSelected, setBuscaOportunidadeSelected] = useState([]);
  const [modalidadeSelected, setModalidadeSelected] = useState([])





  const handleBuscaOportunidadeSelect = (selectedOption) => {
    setBuscaOportunidadeSelected(selectedOption);
  };
  const handleTurnoDisponivelSelect = (selectedOption) => {
    setTurnoDisponivelSelected(selectedOption);
  };
  const handleGeneroSelect = (selectedOption) => {
    setGeneroSelected(selectedOption);
  };

  const  handleEscolaridadeSelect = (selectedOption) => {
    setEscolaridadeSelected(selectedOption);
  };
  const  handleModalidadeSelect = (selectedOption) => {
    setModalidadeSelected(selectedOption);
  };

  const  handleEstudaEstudouSelect = (selectedOption) => {
    setEstudaEstudouSelected(selectedOption);
  };
  const handleDescricao = (selectedOption) => {
    setDescricao(selectedOption);
  };
  const handleDisponibilidadeSelect = (selectedOption) => {
    setDisponibilidadeSelected(selectedOption);
  };

  const handlesubmit = () => {
  }


  const [pag2, setPag2] = useState(false)
  const [pag3, setPag3] = useState(false)

 

  return (
    <>
      <div className="container-logo">
        <img href="/" className="logo" src={image} alt="logo"/>
      </div>
    <div className="container">
      {
        !pag2 && !pag3 && (
          <h2>Queremos te conhecer melhor...</h2>
        )

      }
      {
        pag2 && (
          <h2>Sua escolaridade...</h2>
        )
      }
      {
        pag3 && (
          <h2>Oportunidades que te interessa...</h2>
        )
      }
      
      <form >

        {
          !pag2 && !pag3 && (
            <>
            <div >
                        <div className="form-group">
                          <label htmlFor="nome" >
                            Nome
                          </label>
                          <input
                            id="nome"
                            name="nome"
                            
                            value= {nome}
                            onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                          <label htmlFor="sobrenome`" >
                            Sobrenome
                          </label>
                          <input
                            id="sobrenome"
                            name="sobrenome"
                            
                            onChange={(e) => setSobrenome(e.target.value)}
                            value={sobrenome}
                            />
                        </div>
                      </div>
                      <div className="form-group">
                        <div >
                          <label htmlFor="email" >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                      </div>
                      <div  className="form-group" >
                        
                          <label htmlFor="genero">
                            Gênero
                          </label>
                           
                    
                          <Select2  placeholder="Selecione um gênero" isMulti={false} lines = {genero} handleChangeLineSelect = {handleGeneroSelect}  linesSelected ={generoSelected }></Select2>
               
                      </div>
                      <div className="form-group">
                        <div className="col_ text_left">
                          <label htmlFor="data_nascimento" >
                            Data de nascimento
                          </label>
                          <input
                            id="data_nascimento"
                            value={data_nascimento}
                            name="data_nascimento"
                            
                            onChange={(e) => setDataNascimento(e.target.value)}
                            type="date"
                          />
                          
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col_ text_left">
                          <label htmlFor="renda_per_capita" >
                            Renda per capita
                          </label>
                          <input
                            id="renda_per_capita"
                            value={renda_per_capita}
                            name="renda_per_capita"
                            
                            onChange={(e) => setRenda_per_capita(e.target.value)}
                            type="number"
                          />
                          
                        </div>
                        <div className="form-group">
                          <label htmlFor="cep" >
                            Seu cep
                          </label>
                          <input
                            placeholder="Ex: 04086002"
                            id="cep"
                            value={cep}
                            name="cep"
                            
                            onChange={(e) => setCep(e.target.value)}
                            />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <div className="col_ text_right actionButtons">
                          

                          <button
                          
                            onClick={() => setPag2(true)}
                          >
                            Proximo
                          </button>
                        </div>
                      </div>
                      
            </>

          )
        }
        {
          pag2 && (
            <>
            
                           
                      
                          
                      
                       <div>
                        
                         <div className="form-group" >
                           <label htmlFor="escolaridade" className="escolaridade">
                              Escolaridade
                           </label>
                            
                          
                           <Select2 placeholder="Selecione uma opção" isMulti={false}  linesSelected ={escolaridadeSelected} handleChangeLineSelect ={handleEscolaridadeSelect } lines ={escolaridade} ></Select2>
                          
                         </div>
                       </div>
                       <div className="form-group">
                         <div >
                           <label htmlFor="ocupacao" className="form_label">
                             Ocupação atualmente
                           </label>
                           <input
                            id="ocupacao"
                            name="ocupacao"
                            value={ocupacao}
                            className="form_control"
                            onChange={(e) => setOcupacao(e.target.value)}
                            placeholder="Ex: Estudante, Menor aprendiz, estagiário na área de TI, etc."
                            type="ocupacao"
                          />
                          
                        </div>
                      
                      </div>
                      <div className="form-group">
                          <label htmlFor="estuda_estudou" >
                            Estuda/estudou
                          </label>
                          <Select2 placeholder="Selecione uma opção" isMulti={false}  linesSelected ={estudaEstudouSelected} handleChangeLineSelect ={handleEstudaEstudouSelect} lines ={estudaEstudou} ></Select2>
                        </div>
                    
                      
                      <div className="form-group">
                        <div >
                          <button
                          
                            onClick={() => {setPag2(false)}}
                          >
                            Anterior
                          </button>

                          <button
                          
                            onClick={() => {setPag3(true); setPag2(false)}}
                          >
                            Proximo
                          </button>
                        </div>
                      </div>
            </>
          )
        }
        {
          pag3 && (
            
              <>
            
            <div >
              <div className="form-group" >
                <label htmlFor="turno_disponivel" >
                  Seu turno disponível 
                </label>
                <Select2 placeholder="Selecione uma opção" isMulti={false}  linesSelected ={turnoDisponivelSelected} 
                handleChangeLineSelect={handleTurnoDisponivelSelect} lines ={turnoDisponivel} ></Select2> 
              </div>
              <div  className="form-group">
                <label htmlFor="modalidade`" >
                 Modalidade
                </label>
                  <Select2 placeholder="Selecione uma opção" linesSelected={modalidadeSelected}
                   handleChangeLineSelect={handleModalidadeSelect} 
                   lines ={modalidade} isMulti = {false} ></Select2>
              </div>
            </div>
            <div  className="form-group">
                <label htmlFor="disponibilidade" >
                 Tenho interesse em oportunidades que estejam...
                </label>
                  <Select2 placeholder="Selecione uma opção" linesSelected={disponibilidadeSelected}
                   handleChangeLineSelect={handleDisponibilidadeSelect} 
                   lines ={disponibilidade} isMulti = {true} ></Select2>
              </div>
            <div  className="form-group" >
             
           
                <label htmlFor="busca_oportunidade`" >
                 Busco uma oportunidade...
                </label>
                  <Select2 placeholder="Selecione uma opção" linesSelected={buscaOportunidadeSelected}
                   handleChangeLineSelect={handleBuscaOportunidadeSelect} 
                   lines ={buscaOportunidade} isMulti = {true} ></Select2>
            
           </div>
            <div  className="form-group">
              
                <label htmlFor="area_interesse" >
                  Área de interesse
                </label>
                <input
                  id="area_interesse"
                  value={area_interesse}
                  placeholder="Ex: Psicologia, Letras, Exatas e Medicina"
                  name="area_interesse"
                  className="form_control"
                  onChange={(e) => setArea_interesse(e.target.value)}
                  type="text"
                />
              
            </div>
            <div  className="form-group" >
              <div >
                <textarea onChange={e => handleDescricao(e.target.value)} className="form_control text_placeholder" placeholder="Ex: Gosto de estudar e meu hobby preferido é cozinhar  ">
                </textarea>
              </div>
            </div>

          
           
           
            
            <div >
              <div className="col_ text_right actionButtons">
                <button
                
                  onClick={() => {setPag3(false); setPag2(true) }}
                >
                  Anterior
                </button>

                <button
                
                  onClick={() => {handlesubmit()}}
                >
                  Cadastrar
                </button>
              </div>
            </div>
           
            
          </>
          )
        }
              
                    </form>
    </div>
    </>
  );
};

export default Registration;
