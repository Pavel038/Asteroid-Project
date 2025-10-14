import AsteroidData from "../Components/AsteroidData.jsx";
import MainBody from "../Components/MainBody.jsx";
import Footer from "../Components/Footer.jsx";

export default function DestructionPage(){
 return (
     <>
         <div className="container">
             <MainBody/>
             <div className="cart__container">
                 <AsteroidData/>
             </div>

         </div>

     </>
 )
}