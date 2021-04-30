import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Cliente } from '../Models/cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private db: AngularFireDatabase) { }

  insert(cliente: Cliente){
    this.db.list('cliente').push(cliente)
    .then((result: any) => {
      console.log(result.key);
    });
  }

  update(cliente: Cliente, key: string){
    this.db.list('cliente').update(key, cliente)
    .catch((error: any) => {
      console.log(error);
    });
  }

  getAll() {
    return this.db.list('contato')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val }));
        })
      );
  }

  delete(key: string){
    this.db.object(`contato/${key}`).remove();
  }
}
