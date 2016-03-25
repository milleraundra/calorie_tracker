import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe ({
  name: 'healthy',
  pure: false
})

export class HealthyFoodPipe implements PipeTransform {
  transform(input: Food[], args) {
    var healthFilter = args[0];
    if (healthFilter === "Healthy") {
      return input.filter(function(food) {
        return (food.calories <= 299);
      })
    } else if (healthFilter === "Unhealthy") {
      return input.filter(function(food) {
        return (food.calories >= 300);
      })
    } else {
      return input;
    }

  }
}
