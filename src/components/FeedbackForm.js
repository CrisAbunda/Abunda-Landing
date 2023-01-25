import React, {useState} from 'react';
import '../styles/feedbackForm.css';
import Logo from '../assets/Logotype.png';

const FeedbackForm = ({name, email}) => {
    const [feedbackValue, setFeedbackValue] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        
        formDatab.append('Nombre', name);
        formDatab.append('Correo', email);
        formDatab.append('Feedback', feedbackValue);

        if(feedbackValue === ''){
            document.querySelector('.ab-feedback-error').style.visibility = 'visible';
        }else{
            await fetch(
                "https://script.google.com/macros/s/AKfycbyC-MwcF5g4NOxK9jMEyvkupWNJWtu4rS0cbm_4yViAgLhw2LsBcC4jXGdrZ0IrATOo/exec",
                {
                  method: "POST",
                  body: formDatab
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  alert("Datos recibidos!");
                })
                .catch((error) => {
                    if(error.name === 'SyntaxError'){
                        refreshPage();
                    }else{
                        console.log(error);
                        alert("error");
                    }
                }); 
        }
    }

    const refreshPage = () => {
        window.location.reload(false);
      }

    return (
        <div className="ab-feedback-section">
            <div className='ab-feedback-container'>
                <div className="ab-feedback-header">
                    <img src={Logo} alt="Logo" className='ab-feedback-logo' />
                    <div className="ab-feedback-titles">
                        <h2 className='ab-feedback-title'>¡Muchas Gracias! Tus Datos Fueron Enviados</h2>
                        <p className='ab-feedback-subtitle'>Tu opinión es importante para nosotros. Dejanos saber si hay algo que podamos hacer para mejorar tu experiencia en nuestra página.🚀</p>
                    </div>
                </div>
                <form action="" className="feedback-form" onSubmit={handleSubmit}>
                    <label htmlFor="feedback" className='ab-feedback-label'>Escribe aquí tu opinión.</label>
                    <textarea name="feedback" id="feedback" onChange={
                        e => {
                            setFeedbackValue(e.target.value);
                        }
                    }/>
                    <span className='ab-feedback-error'>El campo esta vacío, asegurate de escribir algo.</span>
                    <div className="bottom-container">
                        <button className='ab-feedback-cancel' onClick={refreshPage}>Mejor en otra ocasión</button>
                        <input type='submit' value='Enviar' className='ab-feedback-submit'/>
                        <span></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;