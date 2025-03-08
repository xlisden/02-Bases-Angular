import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  imports: [ UpperCasePipe ],
  standalone: true
})

export class HeroPageComponent{
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });
  capitalizeName = computed(() =>
    this.name().toUpperCase()
  );

  changeAge(){
    this.age.set(60);
  }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  reset(){
    this.name.set('Ironman');
    this.age.set(45);
  }

}
