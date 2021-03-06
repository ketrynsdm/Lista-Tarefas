import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TarefasService {

    lista: string[] = [];
    private subject = new Subject<string[]>();

    listar(): Observable<string[]> {
        return this.subject.asObservable().pipe();
    }

    adicionar(dado: string): void {
        console.log(dado);
        this.lista.push(dado);
        this.subject.next(this.lista);
    }

    excluir(dado: string): void {
        try {
            this.lista = this.lista.filter(item => item !== dado);
        } catch (error) {} finally {
            this.subject.next(this.lista);
        }


    }

}
