const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const orderAddress = order['address'];
const orderDelivery = order['order']['delivery'];
const orderPizzas = order['order']['pizza'];
const orderDrinks = order['order']['drinks'];
const orderPayment = order['payment'];

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${orderDelivery['deliveryPerson']}, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, R. ${orderAddress['street']}, Nº: ${orderAddress['number']}, AP: ${orderAddress['apartment']}`
}

customerInfo(order);
console.log(customerInfo(order))

const setProp = (obj, key, value) => {
  obj[key] = value;
  console.log(obj.key)
  return obj[key];
}

setProp(order, 'name', 'Luiz Silva');
setProp(orderPayment, 'total', 50)

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order['name']}, o total do seu pedido de marguerita, pepperoni e ${orderDrinks['coke']['type']} é R$ ${order['payment']['total']},00.`
}

console.log(orderModifier(order));