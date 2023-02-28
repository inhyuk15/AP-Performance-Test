module.exports = {
  tableName: 'users',
  attributes: {
    id: { type: 'number', autoIncrement: true },
    name: { type: 'string', required: true },
    // ...
  },
};
