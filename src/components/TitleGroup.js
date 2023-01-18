import React from 'react';
import '../styles/titleGroup.css';

const TitleGroup = () => {
    const titles = [
        {
            key: 1,
            title: 'Tarjetas de Crédito',
        },
        {
            key: 2,
            title: 'Fondos de Inversión',
        },
        {
            key: 3,
            title: 'Productos Financieros',
        },
    ];
    let firstTitle = titles[0];
    firstTitle.key = titles.length + 1;
    titles.push(firstTitle);
    return (
        <>
        <div className='ab-title-group-container'>
            <div className="ab-title-group">
                <h3 className="pretitle">Compara</h3>
                    <div className="ab-titles-container">
                        <div className="titles">
                            {
                                titles.map(i => (
                                    titles.length > 0 && (
                                        <h1 id={'title'+i.key} className='title'>{i.title}</h1>
                                    )
                                ))
                            }
                        </div>
                    </div>
                <div className="subtitle">Verifica bancos y plataformas para invertir y endeudarte.</div>
            </div>
        </div>
        </>
    );
};

export default TitleGroup;