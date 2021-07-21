import React from 'react';
import Item from '../Item/Item';

function Listing({data = []}) {
    return (
        <div className="item-list">
            {data.map(item => {
                return <Item 
                url={item.url} 
                img={item.MainImage} 
                title={item.title} 
                price={item.price} 
                quantity={item.quantity} 
                currency_code={item.currency_code} 
                key={item.listing_id} />
            })}
        </div>
    )
}

export default Listing;


