import React, { FunctionComponent, ReactElement } from 'react';
import { GranularErrorBoundary } from '../GranularErrorBoundary/GranularErrorBoundary';

export interface IErrorCatchingProps {
    render:(props:any)=>ReactElement
    btnClick: boolean
}

export const ErrorCatching:FunctionComponent<IErrorCatchingProps> = props => {
    //Issue with Error bouncing all the way to the GlobalBoundary instead of the CatchingErrorBoundary
    return (
        // <CatchingErrorBoundary>
        <div>
            { props.btnClick ? new Error() : props.render(props)}
        </div>
        /* </CatchingErrorBoundary> */
        
    )
}