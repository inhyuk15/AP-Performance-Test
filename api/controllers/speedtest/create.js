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
        }
      },
      
      fn: async ({floorNumber, roomNumber, sessionId, downloadSpeed, timeStamp}, exits) => {
        try {
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
  