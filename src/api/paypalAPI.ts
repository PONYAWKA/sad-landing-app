import { CreateOrderActions } from "@paypal/paypal-js/types";
export const createPaypalOrder =
  (price: number, type: string) => (_: unknown, actions: CreateOrderActions) =>
    actions.order
      .create({
        purchase_units: [
          {
            description: type,
            amount: {
              currency_code: "USD",
              value: String(price),
            },
          },
        ],
      })
      .then((orderID: string) => orderID);
