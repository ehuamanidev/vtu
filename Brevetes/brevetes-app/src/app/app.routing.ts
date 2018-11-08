import {RouterModule, Routes} from '@angular/router';

import {InicioComponent} from './inicio/inicio.component';
import {RequisitoComponent} from './requisito/requisito.component';
import { AppComponent } from './main/app.component';

//Crea una ruta constante en JScript
const rutas : Routes = [
    //Estructura JSON
    //Cuando le da a inicio llama al componente
    {path : 'inicio', component : InicioComponent},
    {path : 'requisito', component : RequisitoComponent},
    {path : 'main', component : AppComponent},
    {path : '', component : InicioComponent}    
    ];


        //Exponiendo el route a la aplicación
export const routing = RouterModule.forRoot(rutas);

