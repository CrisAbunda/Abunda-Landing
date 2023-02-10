import React, {useState, useEffect} from 'react';
import FeedbackForm from './FeedbackForm';
import { ToastContainer, toast } from 'react-toastify';
import CloseIcon from '../assets/icons/Vector-3.png';
import Logo from '../assets/icons/svgs/Logotype.svg';

import '../styles/form.css';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({closePopup, email}) => {
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
                let inputGroup = document.querySelector('.ab-otro-input-group');
                let input = document.getElementById('otro-input');
                if(!checked5){
                    element.classList.remove('ab-btn-group');
                    element.classList.add('btn-checked');
                    inputGroup.style.height = "auto";
                    inputGroup.style.display = "block";
                    input.disabled = false;
                    input.required = true;
                }else{
                    element.classList.add('ab-btn-group');
                    element.classList.remove('btn-checked');
                    inputGroup.style.height = "0";
                    inputGroup.style.display = "none";
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
                "https://script.google.com/macros/s/AKfycbxIukdzg3Heu-7E2FfDzJB9WEI_po0CB7insozRPHqIleieumx2JSbvFr3pX7x3znSo/exec",
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

    useEffect(() => {
        let emailInput = document.querySelector('#email-input') ;
        if(email !== ''){
            emailInput.value = email;
            emailInput.style.opacity = '1';
        }
        
    });

    const checkEmailValidation = e => {
        let correo = document.querySelector('#email-input');
        let confirmCorreo = document.querySelector('#confirm-email-input');
        if(correo.value === confirmCorreo.value){
            console.log('Email Igual');
            document.querySelector('.confirmEmail-error').style.display = 'none';
            document.querySelector('#confirm-email-input + span + svg').style.display = 'block';
            confirmCorreo.classList.add('valid-validation');
            confirmCorreo.classList.remove('invalid-validation');
        } else{
            console.log('Email Diferente');
            document.querySelector('.confirmEmail-error').style.display = 'block';
            document.querySelector('#confirm-email-input + span + svg').style.display = 'none';
            confirmCorreo.classList.add('invalid-validation');
            confirmCorreo.classList.remove('valid-validation');
        }
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
                    <svg className='ab-confirm-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M18.7104 7.20986C18.6175 7.11613 18.5069 7.04174 18.385 6.99097C18.2632 6.9402 18.1324 6.91406 18.0004 6.91406C17.8684 6.91406 17.7377 6.9402 17.6159 6.99097C17.494 7.04174 17.3834 7.11613 17.2904 7.20986L9.84044 14.6699L6.71044 11.5299C6.61392 11.4366 6.49998 11.3633 6.37512 11.3141C6.25026 11.2649 6.11694 11.2408 5.98276 11.2431C5.84858 11.2454 5.71617 11.2741 5.59309 11.3276C5.47001 11.3811 5.35868 11.4583 5.26544 11.5549C5.1722 11.6514 5.09889 11.7653 5.04968 11.8902C5.00048 12.015 4.97635 12.1484 4.97867 12.2825C4.98099 12.4167 5.00972 12.5491 5.06321 12.6722C5.1167 12.7953 5.19392 12.9066 5.29044 12.9999L9.13044 16.8399C9.2234 16.9336 9.334 17.008 9.45586 17.0588C9.57772 17.1095 9.70843 17.1357 9.84044 17.1357C9.97245 17.1357 10.1032 17.1095 10.225 17.0588C10.3469 17.008 10.4575 16.9336 10.5504 16.8399L18.7104 8.67986C18.8119 8.58622 18.893 8.47257 18.9484 8.34607C19.0038 8.21957 19.0324 8.08296 19.0324 7.94486C19.0324 7.80676 19.0038 7.67015 18.9484 7.54365C18.893 7.41715 18.8119 7.3035 18.7104 7.20986V7.20986Z" fill="white"/>
                    </svg>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="confirm-email-input" className='ab-form-label'>
                        Confirma tu correo
                    </label>
                    <input type="email" placeholder='Si, tu correo electrónico de nuevo' className='ab-form-input' id='confirm-email-input' name="confirmarCorreo" onBlur={checkEmailValidation} required/>
                    <span className='ab-error-message confirmEmail-error'>El correo es diferente, por favor verifícalo.</span>
                    <svg className='ab-confirm-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M18.7104 7.20986C18.6175 7.11613 18.5069 7.04174 18.385 6.99097C18.2632 6.9402 18.1324 6.91406 18.0004 6.91406C17.8684 6.91406 17.7377 6.9402 17.6159 6.99097C17.494 7.04174 17.3834 7.11613 17.2904 7.20986L9.84044 14.6699L6.71044 11.5299C6.61392 11.4366 6.49998 11.3633 6.37512 11.3141C6.25026 11.2649 6.11694 11.2408 5.98276 11.2431C5.84858 11.2454 5.71617 11.2741 5.59309 11.3276C5.47001 11.3811 5.35868 11.4583 5.26544 11.5549C5.1722 11.6514 5.09889 11.7653 5.04968 11.8902C5.00048 12.015 4.97635 12.1484 4.97867 12.2825C4.98099 12.4167 5.00972 12.5491 5.06321 12.6722C5.1167 12.7953 5.19392 12.9066 5.29044 12.9999L9.13044 16.8399C9.2234 16.9336 9.334 17.008 9.45586 17.0588C9.57772 17.1095 9.70843 17.1357 9.84044 17.1357C9.97245 17.1357 10.1032 17.1095 10.225 17.0588C10.3469 17.008 10.4575 16.9336 10.5504 16.8399L18.7104 8.67986C18.8119 8.58622 18.893 8.47257 18.9484 8.34607C19.0038 8.21957 19.0324 8.08296 19.0324 7.94486C19.0324 7.80676 19.0038 7.67015 18.9484 7.54365C18.893 7.41715 18.8119 7.3035 18.7104 7.20986V7.20986Z" fill="white"/>
                    </svg>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="names-input" className='ab-form-label'>
                        Nombres
                    </label>
                    <input type="text" placeholder='Tus Nombres' className='ab-form-input' id='names-input' name='Nombres' required/>
                    <svg className='ab-confirm-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M18.7104 7.20986C18.6175 7.11613 18.5069 7.04174 18.385 6.99097C18.2632 6.9402 18.1324 6.91406 18.0004 6.91406C17.8684 6.91406 17.7377 6.9402 17.6159 6.99097C17.494 7.04174 17.3834 7.11613 17.2904 7.20986L9.84044 14.6699L6.71044 11.5299C6.61392 11.4366 6.49998 11.3633 6.37512 11.3141C6.25026 11.2649 6.11694 11.2408 5.98276 11.2431C5.84858 11.2454 5.71617 11.2741 5.59309 11.3276C5.47001 11.3811 5.35868 11.4583 5.26544 11.5549C5.1722 11.6514 5.09889 11.7653 5.04968 11.8902C5.00048 12.015 4.97635 12.1484 4.97867 12.2825C4.98099 12.4167 5.00972 12.5491 5.06321 12.6722C5.1167 12.7953 5.19392 12.9066 5.29044 12.9999L9.13044 16.8399C9.2234 16.9336 9.334 17.008 9.45586 17.0588C9.57772 17.1095 9.70843 17.1357 9.84044 17.1357C9.97245 17.1357 10.1032 17.1095 10.225 17.0588C10.3469 17.008 10.4575 16.9336 10.5504 16.8399L18.7104 8.67986C18.8119 8.58622 18.893 8.47257 18.9484 8.34607C19.0038 8.21957 19.0324 8.08296 19.0324 7.94486C19.0324 7.80676 19.0038 7.67015 18.9484 7.54365C18.893 7.41715 18.8119 7.3035 18.7104 7.20986V7.20986Z" fill="white"/>
                    </svg>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="lastname-input" className='ab-form-label'>
                        Primer Apellido
                    </label>
                    <input type="text" placeholder='Tu apellido' className='ab-form-input' id='lastname-input' name='Apellido1' required/>
                    <svg className='ab-confirm-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M18.7104 7.20986C18.6175 7.11613 18.5069 7.04174 18.385 6.99097C18.2632 6.9402 18.1324 6.91406 18.0004 6.91406C17.8684 6.91406 17.7377 6.9402 17.6159 6.99097C17.494 7.04174 17.3834 7.11613 17.2904 7.20986L9.84044 14.6699L6.71044 11.5299C6.61392 11.4366 6.49998 11.3633 6.37512 11.3141C6.25026 11.2649 6.11694 11.2408 5.98276 11.2431C5.84858 11.2454 5.71617 11.2741 5.59309 11.3276C5.47001 11.3811 5.35868 11.4583 5.26544 11.5549C5.1722 11.6514 5.09889 11.7653 5.04968 11.8902C5.00048 12.015 4.97635 12.1484 4.97867 12.2825C4.98099 12.4167 5.00972 12.5491 5.06321 12.6722C5.1167 12.7953 5.19392 12.9066 5.29044 12.9999L9.13044 16.8399C9.2234 16.9336 9.334 17.008 9.45586 17.0588C9.57772 17.1095 9.70843 17.1357 9.84044 17.1357C9.97245 17.1357 10.1032 17.1095 10.225 17.0588C10.3469 17.008 10.4575 16.9336 10.5504 16.8399L18.7104 8.67986C18.8119 8.58622 18.893 8.47257 18.9484 8.34607C19.0038 8.21957 19.0324 8.08296 19.0324 7.94486C19.0324 7.80676 19.0038 7.67015 18.9484 7.54365C18.893 7.41715 18.8119 7.3035 18.7104 7.20986V7.20986Z" fill="white"/>
                    </svg>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="phone-input" className='ab-form-label'>
                        Celular
                    </label>
                    <input type="number" placeholder='1234567890' className='ab-form-input' id='phone-input' name='Celular' required/>
                    <svg className='ab-confirm-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M18.7104 7.20986C18.6175 7.11613 18.5069 7.04174 18.385 6.99097C18.2632 6.9402 18.1324 6.91406 18.0004 6.91406C17.8684 6.91406 17.7377 6.9402 17.6159 6.99097C17.494 7.04174 17.3834 7.11613 17.2904 7.20986L9.84044 14.6699L6.71044 11.5299C6.61392 11.4366 6.49998 11.3633 6.37512 11.3141C6.25026 11.2649 6.11694 11.2408 5.98276 11.2431C5.84858 11.2454 5.71617 11.2741 5.59309 11.3276C5.47001 11.3811 5.35868 11.4583 5.26544 11.5549C5.1722 11.6514 5.09889 11.7653 5.04968 11.8902C5.00048 12.015 4.97635 12.1484 4.97867 12.2825C4.98099 12.4167 5.00972 12.5491 5.06321 12.6722C5.1167 12.7953 5.19392 12.9066 5.29044 12.9999L9.13044 16.8399C9.2234 16.9336 9.334 17.008 9.45586 17.0588C9.57772 17.1095 9.70843 17.1357 9.84044 17.1357C9.97245 17.1357 10.1032 17.1095 10.225 17.0588C10.3469 17.008 10.4575 16.9336 10.5504 16.8399L18.7104 8.67986C18.8119 8.58622 18.893 8.47257 18.9484 8.34607C19.0038 8.21957 19.0324 8.08296 19.0324 7.94486C19.0324 7.80676 19.0038 7.67015 18.9484 7.54365C18.893 7.41715 18.8119 7.3035 18.7104 7.20986V7.20986Z" fill="white"/>
                    </svg>
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
                    <input type="checkbox" value='Tarjetas de crédito' name='Tarjetas' className="ab-checkbox-input"/>
                    Tarjetas de crédito
                </button>
                <button className="ab-btn-group" id='ab-form-btn-5' onClick={handleCheck}>
                    {/* <input type="checkbox" value='Otro' name='Otro' className="ab-checkbox-input"/> */}
                    Otro
                </button>
                <div className="ab-input-group ab-otro-input-group">
                    <label htmlFor="otro-input" className='ab-form-label'>
                        ¿Qué producto te gustaría comparar?
                    </label>
                    <input type="text" placeholder='Escribe que te gustaría comparar' className='ab-form-input' id='otro-input' name='Otro' disabled/>
                    <svg className='ab-confirm-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M18.7104 7.20986C18.6175 7.11613 18.5069 7.04174 18.385 6.99097C18.2632 6.9402 18.1324 6.91406 18.0004 6.91406C17.8684 6.91406 17.7377 6.9402 17.6159 6.99097C17.494 7.04174 17.3834 7.11613 17.2904 7.20986L9.84044 14.6699L6.71044 11.5299C6.61392 11.4366 6.49998 11.3633 6.37512 11.3141C6.25026 11.2649 6.11694 11.2408 5.98276 11.2431C5.84858 11.2454 5.71617 11.2741 5.59309 11.3276C5.47001 11.3811 5.35868 11.4583 5.26544 11.5549C5.1722 11.6514 5.09889 11.7653 5.04968 11.8902C5.00048 12.015 4.97635 12.1484 4.97867 12.2825C4.98099 12.4167 5.00972 12.5491 5.06321 12.6722C5.1167 12.7953 5.19392 12.9066 5.29044 12.9999L9.13044 16.8399C9.2234 16.9336 9.334 17.008 9.45586 17.0588C9.57772 17.1095 9.70843 17.1357 9.84044 17.1357C9.97245 17.1357 10.1032 17.1095 10.225 17.0588C10.3469 17.008 10.4575 16.9336 10.5504 16.8399L18.7104 8.67986C18.8119 8.58622 18.893 8.47257 18.9484 8.34607C19.0038 8.21957 19.0324 8.08296 19.0324 7.94486C19.0324 7.80676 19.0038 7.67015 18.9484 7.54365C18.893 7.41715 18.8119 7.3035 18.7104 7.20986V7.20986Z" fill="white"/>
                    </svg>
                </div>
                <span className='ab-error-message submit-error'>Algunos campos no estan llenos, por favor verifícalos.</span>
                <input type="submit" value="Enviar" className='ab-form-submitBtn'/>
            </form>
        </div>
    </div>
    );
};
export default Form;
