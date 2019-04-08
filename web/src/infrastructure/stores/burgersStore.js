import { action, observable } from "mobx";

class BurgersStore {
  @observable burgers = [];

  @action
  setBurgers(burgers) {
    this.burgers = burgers;
  }
}

export default new BurgersStore();
