
module.exports = {

  tableName: 'speedtests',
  primaryKey: 'id',

  attributes: {
    // id: { type: 'number', columnName: '_id'},
    // buildingNumber: { type: 'string' },
    id: { type: 'string', columnName: '_id' },
    floorNumber: { type: 'string' },
    roomNumber: { type: 'string' },
    // yPos: { type: 'number' },
    // xPos: { type: 'number' },
    sessionId: { type : 'string' },
    downloadSpeed: { type: 'string' },
    timeStamp: { type: 'string' },
  },
};
