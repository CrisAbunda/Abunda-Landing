import React, {useState} from 'react';
import FeedbackForm from './FeedbackForm';
import { ToastContainer, toast } from 'react-toastify';
import CloseIcon from '../assets/icons/Vector-3.png'
import Logo from '../assets/Logotype.png';

import '../styles/form.css';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({closePopup}) => {
    const [open, setOpen] = useState(false);
    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);

    const handleCheck = e => {
        e.preventDefault();
        let element = e.target;
        let firstChild = element.firstChild;
        switch (element.id) {
            case 'ab-form-btn-1':
                setChecked1(current => !current);
                changeBtnStyle(checked1, element, firstChild, 'Créditos de libre inversión');
                break;
            case 'ab-form-btn-2':
                setChecked2(current => !current);
                changeBtnStyle(checked2, element, firstChild, 'Criptomonedas');
                break;
            case 'ab-form-btn-3':
                setChecked3(current => !current);
                changeBtnStyle(checked3, element, firstChild, 'Créditos para vehículo');
                break;
            case 'ab-form-btn-4':
                setChecked4(current => !current);
                changeBtnStyle(checked4, element, firstChild, 'Tarjetas de crédito');
                break;
            case 'ab-form-btn-5':
                setChecked5(current => !current);
                let input = document.getElementById('otro-input');
                if(!checked5){
                    element.classList.remove('ab-btn-input');
                    element.classList.add('btn-checked');
                    input.disabled = false;
                    input.required = true;
                }else{
                    element.classList.add('ab-btn-input');
                    element.classList.remove('btn-checked');
                    input.disabled = true;
                    input.required = false;
                    input.value = '';
                }
                break;
        
            default:
                break;
        }
    }
    const changeBtnStyle = (state, element, firstChild, value) => {
        if(!state){
            element.classList.remove('ab-btn-group');
            element.classList.add('btn-checked');
            firstChild.checked = true;
        }else{
            element.classList.add('ab-btn-group');
            element.classList.remove('btn-checked');
            firstChild.checked = false;
        }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        let isValid;
 
        const firstInvalidField = form.querySelector(":invalid");
        if(firstInvalidField){
            checkValidity(firstInvalidField);
        }

        if(form.Correo.value === form.confirmarCorreo.value){
            isValid = form.checkValidity();
            console.log('Email Igual');
            document.querySelector('.confirmEmail-error').style.display = 'none';
        } else{            
            console.log('Email Diferente');
            document.querySelector('.confirmEmail-error').style.display = 'block';
        }

        if(isValid){
            document.querySelector('.submit-error').style.visibility = 'hidden';
            setClientName(formDatab.get('Nombres'));
            setClientEmail(formDatab.get('Correo'));
            await fetch(
                "https://script.google.com/macros/s/AKfycbzL3js_NWspAJbw3vnlA1Q2Tp5WPt6wHfzCh2FhPxvu7m_SKGkJ_i0mJmg-SNHNXYbk/exec",
                {
                  method: "POST",
                  body: formDatab
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  toast("Datos recibidos!");
                })
                .catch((error) => {
                    if(error.name === 'SyntaxError'){
                        setOpen(true);
                    }else{
                        console.log(error);
                        toast("error");
                    }
                }); 
            
        } else{
            document.querySelector('.submit-error').style.visibility = 'visible';
        }
    }

    const checkValidity = input => {
        input.classList.add('btn-invalid-input');
        input.classList.remove('ab-form-input');
    }

    return (
    <div className="ab-form-section">
        <ToastContainer />
        {open ? <FeedbackForm name={clientName} email={clientEmail} /> : null}
        <div className="ab-form-container" id='form'>
            <div className="ab-form-header">
                <img src={Logo} alt="Logo" className='ab-form-logo' />
                <span className="close-icon" onClick={closePopup}>
                    <img src={CloseIcon} alt="Close Form" className='close-image' />
                </span>
            </div>
            <form onSubmit={handleSubmit} className='ab-form' noValidate>
                <div className="ab-form-titles">
                    <h2 className='ab-form-title'>El Primer Paso Para Mejorar Tu Vida Financiera</h2>
                    <p className='ab-form-subtitle'>Déjanos tus datos para ser parte de los primeros usuarios.</p>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="email-input" className='ab-form-label'>
                        Correo
                    </label>
                    <input type="email" placeholder='Tu correo electrónico' className='ab-form-input' id='email-input'  name="Correo" required />
                </div>
                <div className="ab-input-group">
                    <label htmlFor="confirm-email-input" className='ab-form-label'>
                        Confirma tu correo
                    </label>
                    <input type="email" placeholder='Si, tu correo electrónico de nuevo' className='ab-form-input' id='confirm-email-input' name="confirmarCorreo" required/>
                    <span className='ab-error-message confirmEmail-error'>El correo es diferente, por favor verifícalo.</span>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="names-input" className='ab-form-label'>
                        Nombres
                    </label>
                    <input type="text" placeholder='Tus Nombres' className='ab-form-input' id='names-input' name='Nombres' required/>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="lastname-input" className='ab-form-label'>
                        Primer Apellido
                    </label>
                    <input type="text" placeholder='Tu apellido' className='ab-form-input' id='lastname-input' name='Apellido1' required/>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="seclastname-input" className='ab-form-label'>
                        Segundo apellido (opcional)
                    </label>
                    <input type="text" placeholder='Tus apellidos' className='ab-form-input' id='seclastname-input' name='Apellido2' />
                </div>
                <div className="ab-input-group">
                    <label htmlFor="phone-input" className='ab-form-label'>
                        Celular
                    </label>
                    <input type="number" placeholder='1234567890' className='ab-form-input' id='phone-input' name='Celular' required/>
                </div>
                <p className='ab-form-subtitle'>¿Qué productos te gustaría comparar?</p>
                <button className="ab-btn-group" id='ab-form-btn-1' onClick={handleCheck}>
                    <input type="checkbox" value='Créditos de libre inversión' name='Credito1' className="ab-checkbox-input"/>
                    Créditos de libre inversión
                </button>
                <button className="ab-btn-group" id='ab-form-btn-2' onClick={handleCheck}>
                    <input type="checkbox"  value='Criptomonedas' name='Criptomoneda' className="ab-checkbox-input"/>
                    Criptomonedas
                </button>
                <button className="ab-btn-group" id='ab-form-btn-3' onClick={handleCheck}>
                    <input type="checkbox" value='Créditos para vehículo' name='Credito2' className="ab-checkbox-input"/>
                    Créditos para vehículo
                </button>
                <button className="ab-btn-group" id='ab-form-btn-4' onClick={handleCheck}>
                    <input type="checkbox" value='Tarjetas de crédit' name='Tarjetas' className="ab-checkbox-input"/>
                    Tarjetas de crédito
                </button>
                <button className="ab-btn-group" id='ab-form-btn-5' onClick={handleCheck}>
                    {/* <input type="checkbox" value='Otro' name='Otro' className="ab-checkbox-input"/> */}
                    Otro
                </button>
                <div className="ab-input-group">
                    <label htmlFor="otro-input" className='ab-form-label'>
                        ¿Qué producto te gustaría comparar?
                    </label>
                    <input type="text" placeholder='Escribe que te gustaría comparar' className='ab-form-input' id='otro-input' name='Otro' disabled/>
                </div>
                <span className='ab-error-message submit-error'>Algunos campos no estan llenos, por favor verifícalos.</span>
                <input type="submit" value="Enviar" className='ab-form-submitBtn'/>
            </form>
        </div>
    </div>
    );
};

export default Form;