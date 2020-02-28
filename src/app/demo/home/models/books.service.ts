import { Endpoint } from './endpoint';
import { HttpMethod } from './httpMethod';
import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { Genese, GeneseService, GeneseEnvironmentService } from 'genese-angular';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class BooksService implements Endpoint {
    path: '/books';
    method: HttpMethod.GET;
    dto: Book = new Book();
    booksService: Genese<Book>;

    constructor(private http: HttpClient,
                private geneseEnvironment: GeneseEnvironmentService,
                private geneseService: GeneseService) {
        this.booksService = geneseService.getGeneseInstance(Book);
        console.log('%c BooksService this.booksService', 'font-weight: bold; color: red;', this.booksService);
    }

    getBks(): Observable<Book[]> {
        return this.geneseService.getGeneseInstance(Book).getAll() as any;
    }


    /**
     * Return a new typed Genese instance
     */
    getGeneseInstance(): Genese<Book> {
            return new Genese(this.http, this.geneseEnvironment, Book);
    }
}
