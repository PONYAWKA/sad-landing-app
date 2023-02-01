export const createPaypalOrder =
  (price: number, type: string) => (_: any, actions: any) =>
    actions.order
      .create({
        purchase_units: [
          {
            description: type,
            amount: {
              currency_code: "USD",
              value: price,
            },
          },
        ],
      })
      .then((orderID: string) => orderID);
