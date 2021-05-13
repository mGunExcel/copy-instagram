import React from 'react';
import './GNB.scss';

const GNB = () => {
    return (
        <div className="GNB">
            <div className="GNBFlex">
                <div>
                    인스타그램
                </div>
                <div>
                    <input className ="searchBu" type="text"/>
                </div>
                <div className="buttons">
                    <div>B1</div>
                    <div>B2</div>
                    <div>B3</div>
                    <div>B4</div>
                </div>
            </div>
            
        </div>
    );
}

export default GNB;
