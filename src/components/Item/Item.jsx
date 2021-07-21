import React from 'react';
import cn from 'classnames';

function getLevel(quantity) {
    if(quantity > 20) return 'level-high';
    if(quantity > 10) return 'level-medium';
    return 'level-low';
}

function titleLengthValidator(title) {
    if(title.length > 50) return title = title.slice(0, 51) + '...'; 

    return title;
}

function Item({url, img = false, title = false, currency_code, price, quantity}) {
    const validatedTitle = titleLengthValidator(title);
    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={img.url_570xN} alt='' />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{validatedTitle}</p>
                <p className="item-price">{currency_code}{price}</p>
                <p className={cn('item-quantity', getLevel(quantity))}>{quantity}</p>
            </div>
        </div>        
    )
}


export default Item;
