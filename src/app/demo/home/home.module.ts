import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { CoreModule } from '../core/core.module';
import { DescriptionComponent } from './description/description.component';
import { MethodService } from './services/method.service';
import { GeneseAngularLibraryModule } from 'genese-angular-library';
import { GeneseService } from 'genese-angular-library/lib/services/genese.service';


@NgModule({
    declarations: [
        DescriptionComponent,
        HomeComponent
    ],
    imports: [
        CoreModule,
        GeneseAngularLibraryModule.forRoot(),

        AppRoutingModule
    ],
    entryComponents: [
        HomeComponent,
    ],
    providers: [
        MethodService
    ],
    exports: [],
})
export class HomeModule { }
