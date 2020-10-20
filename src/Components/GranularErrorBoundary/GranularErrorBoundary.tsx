import React, { Component } from 'react';

export interface IGranularErrorProps {
    clicked: boolean
}

export class GranularErrorBoundary extends Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = { 
            error: false,
            
        }
    }

    componentDidCatch(error:any, errorInfo:any) {
        console.log(error);
        console.log(errorInfo);
        console.log(this.state.error + '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
        
        
    }

    static getDerivedStateFromError(error:any) {
        return {error:true}
    }

    render() {
        if(this.state.error){
            return(
                <div>
                    Told you not to touch the button {'>>>>>>>>>>>>'}
                </div>
            )
        }
        else {
            return this.props.children
        }
        

    }
}