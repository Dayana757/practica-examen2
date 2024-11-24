import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BarraNavegacion from './components/NavBar'
import BarraLateral from './components/Aside'
import FooterUno from './components/Footer'
import Cards from './components/Card'
import Noticias from './components/Section'





createRoot(document.getElementById('root')).render(

  <StrictMode>
  <BarraNavegacion/>
   <div className='divGeneral'>
     <BarraLateral/>
     <div className='containerMain'>
       <div className='divCards'>
           <Cards/>
           <Cards/>
           <Cards/>
      </div>
       <div>
           <Noticias/>
       </div>
     </div>
   </div>
   <FooterUno/>
 </StrictMode>
)
  

