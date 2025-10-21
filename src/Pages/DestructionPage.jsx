import AsteroidData from "../AsteroidData.jsx";
import MainBody from "../Components/MainBody.jsx";
import Footer from "../Components/Footer.jsx";

export default function DestructionPage({destructionList}){
 return (
     <>
         <div className="container">
             <MainBody destructionList={destructionList} />
             <div className="cart__container">

             </div>

         </div>

     </>
 )
}