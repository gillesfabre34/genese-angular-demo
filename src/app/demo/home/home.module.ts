import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { CoreModule } from '../core/core.module';
import { DescriptionComponent } from './description/description.component';
import { MethodService } from './services/method.service';
import { GeneseModule } from 'genese-tests/lib/core/genese.module';


@NgModule({
    declarations: [
        DescriptionComponent,
        HomeComponent,
    ],
    imports: [
        CoreModule,
        GeneseModule,

        AppRoutingModule
    ],
    providers: [
        MethodService
    ],
    exports: [],
})
export class HomeModule { }
