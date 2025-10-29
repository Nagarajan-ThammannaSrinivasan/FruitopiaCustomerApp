export default [
  {name: 'Boiled Egg', price: 360, quantity: '1 per day', variants: []},
  {
    name: 'Dry Fruits',
    price: 1899,
    quantity: '',
    variants: [
      {variant_name: 'Almonds', variant_provide: 4, variant_price: 'parent'},
      {variant_name: 'Walnuts', variant_provide: 2, variant_price: 'parent'},
      {variant_name: 'Cashews', variant_provide: 3, variant_price: 'parent'},
      {variant_name: 'Pistachios', variant_provide: 6, variant_price: 'parent'},
      {variant_name: 'Raisins', variant_provide: 8, variant_price: 'parent'},
      {variant_name: 'Dates', variant_provide: 2, variant_price: 'parent'},
      {
        variant_name: 'Anjeer(Figs)',
        variant_provide: 1,
        variant_price: 'parent',
      },
    ],
  },
  {
    name: 'Ragi Ambali',
    price: 1899,
    quantity: '350ml per day',
    variants: [],
  },
  {name: 'Sprouts', price: 1199, quantity: '200g per day', variants: []},
  {
    name: 'Detox Water',
    price: 1199,
    quantity: '350ml per day',
    variants: [
      {variant_name: 'Lemon', variant_provide: 1, variant_price: 'parent'},
      {variant_name: 'Mint', variant_provide: 1, variant_price: 'parent'},
      {variant_name: 'Ginger', variant_provide: 1, variant_price: 'parent'},
      {variant_name: 'Herbal', variant_provide: 1, variant_price: 'parent'},
    ],
  },
  {
    name: 'Cold Press Juice',
    price: null,
    quantity: '350ml per day',
    variants: [
      {
        variant_name: 'Dry Fruit juice',
        variant_provide: 1,
        variant_price: 3999,
      },
      {
        variant_name: 'Apple Beetroot carrot juice',
        variant_provide: 1,
        variant_price: 3299,
      },
      {
        variant_name: 'Pineapple juice',
        variant_provide: 1,
        variant_price: 2799,
      },
      {
        variant_name: 'Cucumber Mint Lemon juice',
        variant_provide: 1,
        variant_price: 2499,
      },
      {
        variant_name: 'Bottlegourd juice',
        variant_provide: 1,
        variant_price: 2299,
      },
      {
        variant_name: 'Watermelon juice',
        variant_provide: 1,
        variant_price: 2099,
      },
    ],
  },
];
