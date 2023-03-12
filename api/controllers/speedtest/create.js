module.exports = {
    friendlyName: 'createSpeedTest',
      description: 'Create a new speedtest',
      inputs: {
        floorNumber: {
          type: 'string',
          required: true,
          description: 'floorNumber for speedtest'
        },
        roomNumber: {
					type: 'string',
					required: true,
					description: 'roomNumber for speedtest'
        },
				sessionId: {
          type: 'string',
          required: true,
          unique: true,
          description: 'session id for speedtest'
        },
				downloadSpeed: {
					type: 'string',
					required: true,
					description: 'downloadSpeed for speedtest'
				},
				timeStamp: {
					type: 'string',
					required: true,
					description: 'timeStamp for speedtest'
				},
      },
      exits : {
        success: {
          description: 'New speedtest was created'
        },
        invalid: {
          description: 'The provided inputs invalid'
        },
        conflict: {
          description: 'The provided sessionId already exists'
        }
      },
      
      fn: async (inputs, exits) => {
        const {floorNumber, roomNumber, sessionId, downloadSpeed, timeStamp} = inputs;
        try {
          const existingSpeedTest = await SpeedTest.findOne({ sessionId: sessionId });
          if (existingSpeedTest) {
            return exits.conflict(`The provided sessionId '${sessionId}' already exists`);
          }

          const results = await SpeedTest.create({
						floorNumber,
						roomNumber,
            sessionId,
						downloadSpeed,
						timeStamp
          })
          .fetch();
          return exits.success(results);
  
        } catch (error) {
          return exits.serverError(error);
        }
      },
  
  };
  