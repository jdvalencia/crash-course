import { Input, InputLabel } from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';

export interface IDontTouchProps {
    result: number
    changeResult: ()=>void
    btnClick: boolean
    changeBtnClick: ()=>void
}

export const DontTouch:FunctionComponent<any> = (props) => {
    const [result, changeResult] = useState(1);
    const doNotTouchClick = ()=> {
        props.changeBtnClick(true)
    }

    const calculateDivision = (e:any) => {
            changeResult(100/e.target.value); 
    }

    return(
        <div>
            {/* <InputLabel htmlFor='divide'>Divide 100 by any number you like: </InputLabel>
            <Input id="divide" onChange={calculateDivision}></Input>
            <br/>
            <InputLabel htmlFor='result'>Result:</InputLabel>
            <Input disabled id="result" value={result} /> */}

            {/* {doNotTouchClick()} */}
            <button onClick={doNotTouchClick}>DO NOT TOUCH</button>
        </div>
    )
}