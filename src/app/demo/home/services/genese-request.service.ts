import { HttpClient } from '@angular/common/http';
import { Genese, GeneseEnvironmentService, GeneseService } from 'genese-angular';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { BooksService } from './books.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GeneseRequestService {


    getBooks: () => Observable<Book[]>;

    constructor(private http: HttpClient,
                private geneseEnvironment: GeneseEnvironmentService,
                private geneseService: GeneseService,
                private booksService: BooksService
    ) {
        this.init();
    }

    init() {
        console.log('%c GeneseRequestService ', 'font-weight: bold; color: blue;' );
        this.getBooks = this.booksService.getBooks;
    }
}
