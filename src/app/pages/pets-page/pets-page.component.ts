import { Component, computed, signal } from '@angular/core';

interface Pet {
  id: number;
  name: string;
  age: number;
}

@Component({
  templateUrl: './pets-page.component.html',
  // imports: [NgClass]
})
export class PetsPageComponent {

  pets = signal<Pet[]>([
    {id: 1, name: 'Khalessi', age: 3},
    {id: 2, name: 'Brown', age: 1},
    {id: 3, name: 'Chiqui', age: 15},
  ]);

  // ageClasses = computed(() => {
  //   return {
  //     'text-dange': true,
  //   }
  // });

}
