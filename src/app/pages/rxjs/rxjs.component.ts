import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnDestroy{
  intervalSubs: Subscription = new Subscription();
  constructor() {
    // this.retornaObservable()
    //   .pipe(retry(1))
    //   .subscribe(
    //     (valor) => console.log('subs', valor),
    //     (err) => console.warn('Error', err),
    //     () => console.info('Obs terminado')
    //   );
    this.intervalSubs = this.returnInterval().subscribe((r) => console.log(r));
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return interval(500).pipe(
      //take(10),
      map((valor) => {
        return valor + 1;
      }),
      filter((valor) => (valor % 2 === 0 ? true : false))
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i == 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });
  }
}
