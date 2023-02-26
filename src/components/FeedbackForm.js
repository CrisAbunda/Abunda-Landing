import '../styles/feedbackForm.css';
import Logo from '../assets/icons/svgs/Logotype.svg';
import ArrowIcon from '../assets/icons/svgs/Arrow-Right.svg';
import CloseIcon from '../assets/icons/Vector-3.png';

const FeedbackForm = ({name, email, client}) => {

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const formEle = document.querySelector("form");
    //     const formDatab = new FormData(formEle);
        
    //     formDatab.append('Nombre', name);
    //     formDatab.append('Correo', email);
    //     formDatab.append('Feedback', feedbackValue);

    //     if(feedbackValue === ''){
    //         document.querySelector('.ab-feedback-error').style.visibility = 'visible';
    //     }else{
    //         await fetch(
    //             "https://script.google.com/macros/s/AKfycbwCeJgVgtdYrRSDkoZVzKYUiFl3bKJa52DOJF0OzXnL1_tFjo1Z_qJBL9wGLdSe6bFtmQ/exec",
    //             {
    //               method: "POST",
    //               body: formDatab
    //             }
    //           )
    //             .then((res) => res.json())
    //             .then((data) => {
    //               console.log(data);
    //               alert("Datos recibidos!");
    //             })
    //             .catch((error) => {
    //                 if(error.name === 'SyntaxError'){
    //                     refreshPage();
    //                 }else{
    //                     console.log(error);
    //                     alert("error");
    //                 }
    //             });
    //     }
    // }

    const refreshPage = () => {
        window.location.reload(false);
      }

    return (
        <div className="ab-feedback-section">
            <div className='ab-feedback-container'>
                <div className="ab-feedback-header">
                    <div className="ab-feedback-logo-container">
                        <img src={Logo} alt="Logo" className='ab-feedback-logo' />
                        <span className="feedback-close-icon" onClick={refreshPage}>
                            <img src={CloseIcon} alt="Close Form" className='close-image' />
                        </span>
                    </div>
                    <div className="ab-feedback-titles">
                        <h2 className='ab-feedback-title'>Gracias por unirte a nuestra lista de espera🎉</h2>
                        <p className='ab-feedback-subtitle'>Estás en la posición #{client}</p>
                        <p>Serás parte de los primeros usuarios en tomar decisiones financieras informadas y mejorar tu vida financiera.</p>
                        <p>Por ahora, síguenos en redes sociales para estar al tanto de las últimas noticias financieras.</p>
                    </div>
                </div>
                <div className="ab-feedback-bottom">
                    <a className='ab-feedback-button' href="https://www.instagram.com/abunda.colombia/" target="_blank" rel="noreferrer">
                        <span>Ir a Instagram</span>
                        <img src={ArrowIcon} alt="Arrow Icon" />
                    </a>
                    <a className='ab-feedback-button' href="https://www.tiktok.com/@abunda.colombia" target="_blank" rel="noreferrer">
                        <span>Ir a TikTok</span>
                        <img src={ArrowIcon} alt="Arrow Icon" />
                    </a>
                </div>
                {/* <form action="" className="feedback-form" onSubmit={handleSubmit}>
                    <label htmlFor="feedback" className='ab-feedback-label'>Escribe aquí tu opinión.</label>
                    <textarea name="feedback" id="feedback" onChange={
                        e => {
                            setFeedbackValue(e.target.value);
                        }
                    }/>
                    <span className='ab-feedback-error'>El campo esta vacío, asegurate de escribir algo.</span>
                    <div className="bottom-container">
                        <div className='ab-feedback-cancel' onClick={refreshPage}><span>Mejor en otra ocasión</span></div>
                        <input type='submit' value='Enviar' className='ab-feedback-submit'/>
                        <span></span>
                    </div>
                </form> */}
            </div>
        </div>
    );
};

export default FeedbackForm;