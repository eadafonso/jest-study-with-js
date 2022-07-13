import find from "lodash/find";
import remove from "lodash/remove";

export default class Cart {
  //Criamos um Array vazio
  items = [];

  add(item) {
    const itemToFind = { product: item.product };

    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }

    //Recebemos o item enviado do testes
    //setamos o que recebemos dos testes para o nosso array vazio
    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }

  getTotal() {
    // Percorremos o Array de items e realizamos um
    //calculo com o reducer, lembrando que o primeiro valore
    //do reducer sera sempre 0 tal como configuramos no
    //primeiro test o total come;a sempre com 0

    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }

  sumary() {
    const total = this.getTotal();
    const items = this.items;

    return {
      total,
      items,
    };
  }

  checkout() {
    const { total, items } = this.sumary();

    this.items = [];

    return {
      total,
      items,
    };
  }
}
