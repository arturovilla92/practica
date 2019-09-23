import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { ThemeComponent } from './theme/theme.component';



export const routes : Routes =[

    {path:'pages',
    component:ThemeComponent,
    children:[
        {path:'',
         loadChildren:'./pages/estudiante/estudiante.module#EstudianteModule'}
        ]}
]

@NgModule ({
   imports:[RouterModule.forRoot(routes,{useHash:true})],
    exports:[RouterModule],
    providers:[]
})

export class AppRoutingModule {}