import { Component } from '@angular/core';
import { GeneseModelEnvironment } from 'genese-angular';


@Component({
    selector: 'app-get-all',
    templateUrl: './get-all.component.html',
    styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent {

    // --------------------------------------------------
    //                     PROPERTIES
    // --------------------------------------------------

    public model = {
        genese: {
            path: '/books'
        }
    };

    // --------------------------------------------------
    //                     CONSTRUCTOR
    // --------------------------------------------------

    constructor() {}



}
