

import React from 'react';
import { useState } from 'react';
import styles from './index.css'

const Card = (props) => {
  const [text,setText] = useState("")
  const textHandler = (e) => {
    setText(e.target.value)
  }

  const filtered = props.propsObject.filter(card => {
     return card.name.toLowerCase().includes(text.toLocaleLowerCase())
  })

  const [deletesClick, setDetailsClick] = useState(false)
   const detailsClickHandler = () => {
    setDetailsClick(!deletesClick)
   }

   const [buttonClick, setButtonClick] =useState(false)
    const buttonHandler = () => {
        setButtonClick(!buttonClick)
    }

   


    return (
        <div>
            <div className='header_div'>
                <input placeholder='Сделать поиск' type="text" className='input_header' value={text} oneChange={textHandler} />
            </div>

            <div className='content_div'>
                {filtered.map((el) => {
                    return (
                     <div style={styles.card} className = "card">
                       <div>
                        <img className='img' src={el.imageUrl} alt="..." />
                        </div>
                        {deletesClick && (
                            <div className='modal_div'>
                                <div
                                className='x'
                                role= 'button'
                                onDoubleClick={() => setDetailsClick(!deletesClick)}
                                >
                                  x
                                </div>
                                {el.details}
                            </div>
                        )}  
                        <div className='details'>
                            <div className='price'>
                                <p>
                                    <b>{el.name}</b>
                                </p>
                                <p>
                                    <b>{`${el.price}`}</b>
                                </p>
                            </div>
                            <div className='btn_d'>
                                <button
                                 className='btn_details'
                                 oneClick ={() => detailsClickHandler()} 
                                 >
                                 Детали
                                </button>
                            </div>
                        </div>
                     <div className='text'>{el.description}</div>

                     <div className='btn'>
                        <button 
                        disabled = {buttonClick}
                        className='btn_bay'
                        oneClick={() => buttonHandler()} 
                        >
                        {buttonClick ? "Товар уже в корзине":"Добавить в корзину"}
                        </button>
                        {buttonClick && (
                            <div
                             className='deleteBasket'
                             role ='button'
                             onClick={() => setButtonClick(!buttonClick)}
                             >
                             Удалить из корзины
                            </div>
                        )}
                     </div>
                     </div>   

                    )
                } )}
            </div>
        </div>
    );
};

export default Card;