module.exports = {

  tableName: 'users',

  primaryKey: 'id',
  attributes: {
    id: { type: 'string', columnName: '_id' },
    sessionId: { type: 'string', required: true },
    locationId: { type: 'string', required: true},
    timeStamp: { type: 'number', autoCreatedAt: true},
    // ...
  },

};

