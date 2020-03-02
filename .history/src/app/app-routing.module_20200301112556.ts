import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyPickComponent } from './key-pick/key-pick.component';
import { KeyCertaintyDrillComponent } from './key-certainty-drill/key-certainty-drill.component';
import { AppComponent } from './app.component';


 
const appRoutes: Routes = [

        { path: 'app-root', component: AppComponent},
        
        

    // { path: '', redirectTo: '/key-certainty-drill', pathMatch: 'full' },
    // { path: 'key-certainty-drill', component: KeyCertaintyDrillComponent },
    // { path: 'key-pick', component: KeyPickComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}