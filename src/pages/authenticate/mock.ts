// Mocks
export const form: FormFields = {
  email: {
    type: 'text',
    label: 'email',
    value: '',
    placeholder: 'Enter your email',
  },
  password: {
    type: 'password',
    label: 'password',
    value: '',
    placeholder: 'Enter your password',
  },
};
export const newItemForm: FormFields = {
  name: {
    type: 'text',
    label: 'name',
    value: '',
    placeholder: 'Enter item name',
  },
  type: {
    type: 'text',
    label: 'type',
    value: '',
    placeholder: 'Enter item type',
  },
  price: {
    type: 'number',
    label: 'price',
    value: '',
    placeholder: 'Enter item price',
  },
  stock: {
    type: 'number',
    label: 'stock',
    value: '',
    placeholder: 'Enter item stock',
  },
  manufacturer: {
    type: 'text',
    label: 'manufacturer',
    value: '',
    placeholder: 'Enter item manufacturer',
  },
  description: {
    type: 'text',
    label: 'description',
    value: '',
    multiline: true,
    rows: 5,
  },
};

export default { form };
