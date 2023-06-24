import { Navigate } from "react-router-dom";
const ProtectedUser = ({ children }) => {

    let data=JSON.parse(sessionStorage.getItem("log"));
  if (data==null || data==undefined) {
    return <Navigate to="/" replace />;
  }
  if(data.role==='user')
  {
    return children;
  }

  else{
    return <Navigate to="/" replace />;

  }
  


};
export default ProtectedUser;