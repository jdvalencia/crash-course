import React, { Component } from 'react';

export class GlobalErrorBoundary extends Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            error: false,
            
        }
    }

    componentDidCatch(error:any, errorInfo:any) {
        console.log(error);
        console.log(errorInfo);
        
    }

    static getDerivedStateFromError(error:any) {
        return {error:true}
    }

    render() {
        if(this.state.error){
            return(
                <div>
                    Oops something broke
                </div>
            )
        }
        else {
            return this.props.children
        }
    }
}