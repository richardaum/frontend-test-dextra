import { action, observable } from "mobx";

const customBurger = {
  id: "custom",
  name: "Monte seu sanduíche",
  hidden: true,
  ingredients: []
};
export class BurgersStore {
  @observable burgers = [];

  @action
  setBurgers(burgers) {
    this.burgers = [...burgers, customBurger];
  }
}

export default new BurgersStore();
