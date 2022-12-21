import React from "react";
import './Loading.css';
import { InfinitySpin } from 'react-loader-spinner'

function Loading(){
    return (
        <div>
            <InfinitySpin width="200" color="#4fa94d" align-itens='center' jsutify-content="center" />
        </div>
    )
}
export default Loading