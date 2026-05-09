import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtecutedRoute = ({children,authenicated}) => { 
const navigate = useNavigate();

    if(!authenicated) {
       useEffect(()=> {
            navigate('/login')
       },[]) 

    }
  return children;
}

export default ProtecutedRoute;