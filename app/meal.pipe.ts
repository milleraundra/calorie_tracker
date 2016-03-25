import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe ({
  name: 'meal',
  pure: false
})

export class MealPipe implements PipeTransform {
  transform(input: Food[], args) {
    var healthFilter = args[0];
    if (healthFilter === "breakfast") {
      return input.filter(function(food) {
        return (food.meal === "breakfast");
      })
    } else if (healthFilter === "lunch") {
      return input.filter(function(food) {
        return (food.meal === "lunch");
      })
    } else if (healthFilter === "dinner") {
      return input.filter(function(food) {
        return (food.meal === "dinner");
      })
    } else if (healthFilter === "snacks") {
      return input.filter(function(food) {
        return (food.meal === "snack");
      })
    } else {
      return input;
    }

  }
}
