import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroService } from './../hero';
@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent {
    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService
    ) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
