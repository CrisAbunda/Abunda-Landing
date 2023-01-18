import {useState, React} from 'react';
import CloseIcon from '../assets/icons/Vector-3.png'
import Logo from '../assets/Logotype.png';

import '../styles/form.css';

const Form = ({closePopup}) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = e => {
        setChecked(current => !current);
        let element = e.target;
        if(checked){
            element.classList.remove('ab-btn-input');
            element.classList.add('btn-checked');
        }else{
            element.classList.add('ab-btn-input');
            element.classList.remove('btn-checked');
        }
    }

    return (
    <div className="ab-form-section">
        <div className="ab-form-container" id='form'>
            <div className="ab-form-header">
                <img src={Logo} alt="Logo" className='ab-form-logo' />
                <span className="close-icon" onClick={closePopup}>
                    <img src={CloseIcon} alt="Close Form" className='close-image' />
                </span>
            </div>
            <form action="" className='ab-form'>
                <div className="ab-form-titles">
                    <h2 className='ab-form-title'>El Primer Paso Para Mejorar Tu Vida Financiera</h2>
                    <p className='ab-form-subtitle'>Déjanos tus datos para ser parte de los primeros usuarios.</p>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="email-input" className='ab-form-label'>
                        Correo
                    </label>
                    <input type="email" placeholder='Tu correo electrónico' className='ab-form-input' id='email-input' required/>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="confirm-email-input" className='ab-form-label'>
                        Confirma tu correo
                    </label>
                    <input type="email" placeholder='Si, tu correo electrónico de nuevo' className='ab-form-input' id='confirm-email-input' required/>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="names-input" className='ab-form-label'>
                        Nombres
                    </label>
                    <input type="text" placeholder='Tus Nombres' className='ab-form-input' id='names-input' required/>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="lastname-input" className='ab-form-label'>
                        Primer Apellido
                    </label>
                    <input type="text" placeholder='Tu apellido' className='ab-form-input' id='lastname-input' required/>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="seclastname-input" className='ab-form-label'>
                        Segundo apellido (opcional)
                    </label>
                    <input type="text" placeholder='Tus apellidos' className='ab-form-input' id='seclastname-input'/>
                </div>
                <div className="ab-input-group">
                    <label htmlFor="phone-input" className='ab-form-label'>
                        Celular
                    </label>
                    <input type="number" placeholder='1234567890' className='ab-form-input' id='phone-input' required/>
                </div>
                <p className='ab-form-subtitle'>¿Qué productos te gustaría comparar?</p>
                <div className="ab-btn-input-group">
                    <input type="button" id='ab-form-btn-1' name='Créditos de libre inversión' value='Créditos de libre inversión' className="ab-btn-input" onClick={handleCheck}/>
                </div>
                <input type="button" id='ab-form-btn-2' name='Criptomonedas' value='Criptomonedas' className="ab-btn-input" onClick={handleCheck}/>
                <input type="button" id='ab-form-btn-3' name='Créditos para vehículo' value='Créditos para vehículo' className="ab-btn-input" onClick={handleCheck}/>
                <input type="button" id='ab-form-btn-4' name='Tarjetas de crédito' value='Tarjetas de crédito' className="ab-btn-input" onClick={handleCheck}/>
                <input type="button" id='ab-form-btn-otro' name='Otro' value='Otro' className="ab-btn-input" onClick={handleCheck}/>
                <div className="ab-input-group">
                    <label htmlFor="otro-input" className='ab-form-label'>
                        ¿Qué producto te gustaría comparar?
                    </label>
                    <input type="text" placeholder='Escribe que te gustaría comparar' className='ab-form-input' id='otro-input' disabled/>
                </div>
                <input type="submit" value="Enviar" className='ab-form-submitBtn'/>
            </form>
        </div>
    </div>
    );
};

export default Form;