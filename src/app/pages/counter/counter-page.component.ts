import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px 25px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  resetCounter() {
    this.counter = 10;
    this.counterSignal.set(0);
  }
  operateCounter(value: number, isIncrease: boolean){
    if (isIncrease) {
      this.counter += value;
      this.counterSignal.update((prev) => prev + value );
    }else{
      this.counter -= value;
      this.counterSignal.update((prev) => prev - value );
    }
  }

}
