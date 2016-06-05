import { Pizza } from './pizza'

export class Order {
  name: string = ''
  pizzas: Pizza = []

  totalCost(): number {
    let totalCost = 0
    this.pizzas.forEach(pizza => totalCost += pizza.calculateCost())
    return totalCost
  }
}
