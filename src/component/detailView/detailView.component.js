import './detailView.scss';
import React from 'react';
import {Edit} from '../Helper/edit/edit.component';
export const DetailView= ({func, values, detailType, leftElements, rightElements, classBox, box1, box2, classDetailType }) => {
    console.log(`left elements :${leftElements[0]}`);
    return (
        <div className={classBox}>
            <div classsName={box1}>
                <div className={classDetailType}>{detailType}</div>
                    { leftElements.map((value, id)=>
                            <div key={id} className="detailText">{value}</div>
                        )
                    }
            </div>
            <div classsName={box2}>
                        {func?<Edit func={func} setState={values}/>:null}
                        {
                            rightElements
                            ? rightElements.map((value, id)=>
                            <div key={id} className="detailText">{value}</div>
                            )
                            :null
                        }
            </div>
        </div>
    );
}