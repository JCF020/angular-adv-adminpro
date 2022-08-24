import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy{
  public titulo: string = '';
  public tituloSub$: Subscription;

  constructor(private router: Router) {
    this.tituloSub$ = this.getArgumentoRuta().subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = titulo;
      console.log(this.titulo);
    });
  }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  getArgumentoRuta() {
    return this.router.events.pipe(
      filter((a): a is ActivationEnd => a instanceof ActivationEnd),
      filter((a: ActivationEnd) => a.snapshot.firstChild === null),
      map((a: ActivationEnd) => a.snapshot.data)
    );
  }
}
