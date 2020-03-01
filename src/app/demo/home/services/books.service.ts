import { Endpoint } from '../models/endpoint';
import { HttpMethod } from '../models/httpMethod';
import { Book } from '../models/book.model';
import { Injectable } from '@angular/core';
import { Genese, GeneseEnvironmentService, GeneseService } from 'genese-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from '../models/api';

@Injectable()
export class BooksService implements Api {
    endpoints: Endpoint[] = [{
        path: '/books',
        method: HttpMethod.GET,
        dto: Book
    }];

    constructor(private http: HttpClient,
                private geneseEnvironment: GeneseEnvironmentService,
                private geneseService: GeneseService) {
    }

    getBooks(): Observable<Book[]> {
        console.log('%c BooksService this.booksService', 'font-weight: bold; color: red;', 'this.booksService');
        return this.geneseService.getGeneseInstance(Book).getAllCustom('/books') as any;
    }


    /**
     * Return a new typed Genese instance
     */
    getGeneseInstance(): Genese<Book> {
            return new Genese(this.http, this.geneseEnvironment, Book);
    }
}
