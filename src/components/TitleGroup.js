import React from 'react';
import '../styles/titleGroup.css';

const TitleGroup = () => {
    const titles = [
        {
            pretitle: 'Compara',
            title: 'Tarjetas de Crédito',
            subtitle: 'Verifica bancos y plataformas para invertir y endeudarte.',
        },
        {
            pretitle: 'Pretitle',
            title: 'Title',
            subtitle: 'Subtitle',
        },
        {
            pretitle: 'Pretitle2',
            title: 'Title2',
            subtitle: 'Subtitle2',
        },
    ];
    return (
        <>
        <div className='ab-opening-text-container'>
            <div className="ab-title-container">
            {
                titles.map(i => (
                    titles.length > 0 && (
                        <div className="ab-title-group">
                            <div className="pretitle">{i.pretitle}</div>
                            <h1 className='title'>{i.title}</h1>
                            <div className="subtitle">{i.subtitle}</div>
                        </div>
                    )
                ))
            }
            </div>
        </div>
        </>
    );
};

export default TitleGroup;