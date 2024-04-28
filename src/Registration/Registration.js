import React, { useState } from "react";
import "./Registration.css";
import image from '../images/logo.png'
import Select2 from "../components/Select";
import Oportunidades from "../Oportunidades/Oportunidades";
import LoadingSpinner from "../components/LoadingSpinner";
import  logo from '../images/logo.png'
const Registration = (props) => {

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

  const validadorDeCampo = (campo) => {
    if (campo === "") {
      return false
    }
    return true
  }
  function validarCEP(cep) {
    return /^[0-9]{5}[0-9]{3}$/.test(cep);
  }
  const [modalidade, setModalidade] = useState(["Presencial", "Remoto", "Híbrido"])
  const [area_interesse, setArea_interesse] = useState("")
  const [buscaOportunidade, setBuscaOportunidade] = useState(["Acadêmica", "Trabalho", "Extra curricular"])
  const [descricao, setDescricao] = useState("")
  const [turnoDisponivel, setTurnoDisponivel] = useState(["Manhã", "Tarde", "Noite"]);
  const [disponibilidade, setDisponibilidade] = useState(["Na mesma cidade", "No mesmo estado", "Em outro estado", "No mesmo país", "Em outro país"]);
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
  const [recomendacao, setRecomendacao] = useState(false)

    const [data, setData] = useState([])
    const handlesubmitForm = (event) => {
    event.preventDefault()
    setRecomendacao(true)
    
    fetch('http://3.140.128.237:8080/aluno', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome.toString(),
        sobrenome: sobrenome.toString(),
        email: email.toString(),
        genero: generoSelected.toString(),
        dataNascimento: data_nascimento.toString(),
        renda_per_capita: renda_per_capita,
        cep: cep.toString(),
        escolaridade: escolaridadeSelected.toString(),
        ocupacao: ocupacao.toString(),
        distancia_em_km: 23,
        modalidade: modalidadeSelected.toString(),
        periodo: disponibilidadeSelected.toString(),
        oportunidade: buscaOportunidadeSelected.toString(),
        areas_interesse: area_interesse.toString(),
        descricao: descricao.toString()})
    })
    
    .then(response => response.json())
    .then(data => {
        // pausa de 2 segundos para simular a busca
        const id_aluno = data['id']
        fetch(`http:///3.140.128.237:5000/search`,{
          method: 'POST',
          body: JSON.stringify({
            "id_aluno": id_aluno
          }),
          headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {

         
            props.setMatches(data['text'])
            window.location.href = "/oportunidades"
            
       })
       
    })
   }
  
  const [pag2, setPag2] = useState(false)
  const [pag3, setPag3] = useState(false)

 

  return (
      <>
    {
      !pag2 && !pag3 && (
        <div className="container-registration">
        <div className="container-logo">
          <img src={image} alt="logo" className="logo" />
        </div> 
        <div className="container-message">
          <h2>Preencha os campos abaixo</h2>
          <h2>Queremos te conhecer melhor!</h2>
        </div>
  
        <div className="container-formulario">
          <div className="container-campos">
            
              
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
              
                  <div className="form-group">
                 
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
                    <div  className="form-group" >
                        <label htmlFor="genero">
                          Gênero
                        </label>
                      
                        <Select2  placeholder="Selecione um gênero" isMulti={false} lines = {genero} handleChangeLineSelect = {handleGeneroSelect}  linesSelected ={generoSelected }></Select2>
                      
                    </div>
                    <div className="form-group">
                   
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
                    
                      <div className="form-group">
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
                  
                  <div className="form-group">
                    
                      <button className="first-button"
                        onClick={(e) => {
                          e.preventDefault()
                          if (!validadorDeCampo(nome) || !validadorDeCampo(sobrenome) || !validadorDeCampo(email) || !validadorDeCampo(data_nascimento) || !validadorDeCampo(renda_per_capita) || !validadorDeCampo(cep) || generoSelected.length === 0) {
                            alert("Preencha todos os campos")
                          } else {
                            if(!validarCEP(cep)){
                              alert("Cep inválido. Um cep de 8 dígitos deve ser fornecido, exemplo: `01001000`")
                            } else {
  
                            setPag2(true)
                            }
                          }
                        }}
                        >
                           Proximo
                        </button>
                   
                  </div>
           
          </div>
        </div>
      </div>
      )
    }

    {
      pag2 && (
        <div className="container-registration">
        <div className="container-logo">
          <img src={image} alt="logo" className="logo" />
        </div> 
        <div className="container-message">
          <h2>Preencha os campos abaixo</h2>
          <h2>Sua escolaridade</h2>
        </div>
  
        <div className="container-formulario">
          <div className="container-campos">
            
              
                <div className="form-group">
                    <label htmlFor="escolaridade" className="escolaridade">
                      Escolaridade
                    </label>
                    <Select2 placeholder="Selecione uma opção" isMulti={false}  linesSelected ={escolaridadeSelected} handleChangeLineSelect ={handleEscolaridadeSelect } lines ={escolaridade} ></Select2>
                </div>
                <div className="form-group">
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
                <div className="form-group">
                    <label htmlFor="estuda_estudou" >
                      Estuda/estudou
                    </label>
                    <Select2 placeholder="Selecione uma opção" isMulti={false}  linesSelected ={estudaEstudouSelected} handleChangeLineSelect ={handleEstudaEstudouSelect} lines ={estudaEstudou} ></Select2>
                </div>
              
                <div className="form-group">
                    <button className="btn-previous"
                      onClick={() => {setPag2(false)}}
                    >
                      Anterior
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        if (!validadorDeCampo(escolaridadeSelected) || !validadorDeCampo(ocupacao) || !validadorDeCampo(estudaEstudouSelected)) {
                          alert("Preencha todos os campos")
                        } else {
                          
                        
                        setPag3(true); setPag2(false)}}
                      }
                    >
                      Proximo
                    </button>
                </div>
              

          </div>
        </div>
      </div>
      )
    }

    {
      pag3 && (
        <div className="container-registration">
        <div className="container-logo">
          <img src={image} alt="logo" className="logo" />
        </div> 
        <div className="container-message">
          <h2>Preencha os campos abaixo</h2>
          <h2>Oportunidades que te interessa</h2>
        </div>
  
        <div className="container-formulario">
          <div className="container-campos">
            
              
                <div className="form-group">
                    <label htmlFor="turno_disponivel" >
                      Seu turno disponível 
                    </label>
                    <Select2 placeholder="Selecione uma opção" isMulti={true}  linesSelected ={turnoDisponivelSelected} 
                    handleChangeLineSelect={handleTurnoDisponivelSelect} lines ={turnoDisponivel} ></Select2> 
                </div>
                <div  className="form-group">
                    <label htmlFor="modalidade`" >
                     Modalidade
                    </label>
                      <Select2 placeholder="Selecione uma opção" linesSelected={modalidadeSelected}
                       handleChangeLineSelect={handleModalidadeSelect} 
                       lines ={modalidade} isMulti = {true} ></Select2>
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
                  <label>
                    Descrição
                  </label>
                  <div  className="text-area">
                    <textarea onChange={e => handleDescricao(e.target.value)} placeholder="Ex: Gosto de estudar e meu hobby preferido é cozinhar  ">
                    </textarea>
                  </div>
                </div>
                <div  className="form-group">
               
                    <button className="btn-previous "
                      onClick={(e) => {
                        e.preventDefault()
                        setPag3(false); setPag2(true) }}
                    >
                      Anterior
                    </button>
                   <button  className="btn-cadastrar" onClick={(e) => handlesubmitForm(e)} >Cadastrar</button> 
                 
                
                </div>
          </div>
        </div>
      </div>


      )
    }
    </>
  )
    
    
}

export default Registration;
//     <>
    
//     {
//      (

//         <>
//         <div className="container-logo">  
//           <img src={logo} alt="logo" className="logo" />
//         </div>
//     <div className="container">
//       {
//         !pag2 && !pag3 && (
//           <h2>Queremos te conhecer melhor...</h2>
//         )

//       }
//       {
//         pag2 && (
//           <h2>Sua escolaridade...</h2>
//         )
//       }
//       {
//         pag3 && (
//           <h2>Oportunidades que te interessa...</h2>
//         )
//       }
      
//       <form >

//         {
//           !pag2 && !pag3 && (
//             <>
//             <div >
//                         <div className="form-group">
//                           <label htmlFor="nome" >
//                             Nome
//                           </label>
//                           <input
//                             id="nome"
//                             name="nome"
                            
//                             value= {nome}
//                             onChange={(e) => setNome(e.target.value)}
//                             />
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="sobrenome`" >
//                             Sobrenome
//                           </label>
//                           <input
//                             id="sobrenome"
//                             name="sobrenome"
//                             onChange={(e) => setSobrenome(e.target.value)}
//                             value={sobrenome}
//                             />
//                         </div>
//                       </div>
//                       <div className="form-group">
//                         <div >
//                           <label htmlFor="email" >
//                             Email
//                           </label>
//                           <input
//                             id="email"
//                             name="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                       </div>
//                       <div  className="form-group" >
//                           <label htmlFor="genero">
//                             Gênero
//                           </label>
//                           <Select2  placeholder="Selecione um gênero" isMulti={false} lines = {genero} handleChangeLineSelect = {handleGeneroSelect}  linesSelected ={generoSelected }></Select2>
               
//                       </div>
//                       <div className="form-group">
//                         <div className="col_ text_left">
//                           <label htmlFor="data_nascimento" >
//                             Data de nascimento
//                           </label>
//                           <input
//                             id="data_nascimento"
//                             value={data_nascimento}
//                             name="data_nascimento"
                            
//                             onChange={(e) => setDataNascimento(e.target.value)}
//                             type="date"
//                           />
                          
//                         </div>
//                       </div>
//                       <div className="form-group">
//                         <div className="col_ text_left">
//                           <label htmlFor="renda_per_capita" >
//                             Renda per capita
//                           </label>
//                           <input
//                             id="renda_per_capita"
//                             value={renda_per_capita}
//                             name="renda_per_capita"
                            
//                             onChange={(e) => setRenda_per_capita(e.target.value)}
//                             type="number"
//                           />
                          
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="cep" >
//                             Seu cep
//                           </label>
//                           <input
//                             placeholder="Ex: 04086002"
//                             id="cep"
//                             value={cep}
//                             name="cep"
                            
//                             onChange={(e) => setCep(e.target.value)}
//                             />
//                         </div>
//                       </div>
                      
//                       <div className="form-group">
//                         <div >
                          

//                           <button
                          
//                             onClick={(e) => {
//                               e.preventDefault()
//                               if (!validadorDeCampo(nome) || !validadorDeCampo(sobrenome) || !validadorDeCampo(email) || !validadorDeCampo(data_nascimento) || !validadorDeCampo(renda_per_capita) || !validadorDeCampo(cep) || generoSelected.length === 0) {
//                                 alert("Preencha todos os campos")
//                               } else {
//                                 if(!validarCEP(cep)){
//                                   alert("Cep inválido. Um cep de 8 dígitos deve ser fornecido, exemplo: `01001000`")
//                                 } else {

//                                 setPag2(true)
//                                 }
//                               }
//                             }}
//                           >
//                             Proximo
//                           </button>
//                         </div>
//                       </div>
                      
//             </>

//           )
//         }
//         {
//           pag2 && (
//             <>
            
                           
                      
                          
                      
//                        <div>
                        
//                          <div className="form-group" >
//                            <label htmlFor="escolaridade" className="escolaridade">
//                               Escolaridade
//                            </label>
                            
                          
//                            <Select2 placeholder="Selecione uma opção" isMulti={false}  linesSelected ={escolaridadeSelected} handleChangeLineSelect ={handleEscolaridadeSelect } lines ={escolaridade} ></Select2>
                          
//                          </div>
//                        </div>
//                        <div className="form-group">
//                          <div >
//                            <label htmlFor="ocupacao" className="form_label">
//                              Ocupação atualmente
//                            </label>
//                            <input
//                             id="ocupacao"
//                             name="ocupacao"
//                             value={ocupacao}
//                             className="form_control"
//                             onChange={(e) => setOcupacao(e.target.value)}
//                             placeholder="Ex: Estudante, Menor aprendiz, estagiário na área de TI, etc."
//                             type="ocupacao"
//                           />
                          
//                         </div>
                      
//                       </div>
//                       <div className="form-group">
//                           <label htmlFor="estuda_estudou" >
//                             Estuda/estudou
//                           </label>
//                           <Select2 placeholder="Selecione uma opção" isMulti={false}  linesSelected ={estudaEstudouSelected} handleChangeLineSelect ={handleEstudaEstudouSelect} lines ={estudaEstudou} ></Select2>
//                         </div>
                    
                      
//                       <div className="form-group">
//                         <div >
//                           <button
                          
//                             onClick={() => {setPag2(false)}}
//                           >
//                             Anterior
//                           </button>

//                           <button
                          
//                             onClick={(e) => {
//                               e.preventDefault()
//                               if (!validadorDeCampo(escolaridadeSelected) || !validadorDeCampo(ocupacao) || !validadorDeCampo(estudaEstudouSelected)) {
//                                 alert("Preencha todos os campos")
//                               } else {
                                  
                                
//                               setPag3(true); setPag2(false)}}
//                             }
//                           >
//                             Proximo
//                           </button>
//                         </div>
//                       </div>
//             </>
//           )
//         }
//         {
//           pag3 && (
            
//               <>
            
//             <div >
//               <div className="form-group" >
//                 <label htmlFor="turno_disponivel" >
//                   Seu turno disponível 
//                 </label>
//                 <Select2 placeholder="Selecione uma opção" isMulti={true}  linesSelected ={turnoDisponivelSelected} 
//                 handleChangeLineSelect={handleTurnoDisponivelSelect} lines ={turnoDisponivel} ></Select2> 
//               </div>
//               <div  className="form-group">
//                 <label htmlFor="modalidade`" >
//                  Modalidade
//                 </label>
//                   <Select2 placeholder="Selecione uma opção" linesSelected={modalidadeSelected}
//                    handleChangeLineSelect={handleModalidadeSelect} 
//                    lines ={modalidade} isMulti = {true} ></Select2>
//               </div>
//             </div>
//             <div  className="form-group">
//                 <label htmlFor="disponibilidade" >
//                  Tenho interesse em oportunidades que estejam...
//                 </label>
//                   <Select2 placeholder="Selecione uma opção" linesSelected={disponibilidadeSelected}
//                    handleChangeLineSelect={handleDisponibilidadeSelect} 
//                    lines ={disponibilidade} isMulti = {true} ></Select2>
//               </div>
//             <div  className="form-group" >
             
           
//                 <label htmlFor="busca_oportunidade`" >
//                  Busco uma oportunidade...
//                 </label>
//                   <Select2 placeholder="Selecione uma opção" linesSelected={buscaOportunidadeSelected}
//                    handleChangeLineSelect={handleBuscaOportunidadeSelect} 
//                    lines ={buscaOportunidade} isMulti = {true} ></Select2>
            
//            </div>
//             <div  className="form-group">
              
//                 <label htmlFor="area_interesse" >
//                   Área de interesse
//                 </label>
//                 <input
//                   id="area_interesse"
//                   value={area_interesse}
//                   placeholder="Ex: Psicologia, Letras, Exatas e Medicina"
//                   name="area_interesse"
//                   className="form_control"
//                   onChange={(e) => setArea_interesse(e.target.value)}
//                   type="text"
//                 />
              
//             </div>
//             <div  className="form-group" >
//               <div >
//                 <textarea onChange={e => handleDescricao(e.target.value)} className="form_control text_placeholder" placeholder="Ex: Gosto de estudar e meu hobby preferido é cozinhar  ">
//                 </textarea>
//               </div>
//             </div>

          
           
           
            
//             <div >
//               <div>
//                 <button
                
//                   onClick={(e) => {
                    
                    
//                     e.preventDefault()
//                     setPag3(false); setPag2(true) }}
//                 >
//                   Anterior
//                 </button>
//                <button onClick={(e) => handlesubmitForm(e)} >Cadastrar</button> 
             
//               </div>
//             </div>
           
            
//           </>
//           )
//         }
              
//         </form>
//     </div>
    

          
//         </>
//       ) 
//     }
// </>
      
// )};

// export default Registration;
