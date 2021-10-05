const RPC = require('discord-rpc')
 const client = new RPC.Client({transport: 'ipc'})
 async function DisplayRPC (details, largeText, smallText, buttons) {
      try {
   const activity = {
       details: details,
       assets: {
        large_image: "tictactoe",
        large_text: largeText,
        small_image: 'tictactoe',
        small_text: smallText
       }, 
       buttons: [
       {
        'label': "Play",
         'url': "https://www.youtube.com/watch?v=pPN1hyKF-t4"
       }
    ],
    timestamps: {start: Date.now()},
    instance: true
      }
      await client.on('connected', () => {
        console.log("connected!");
           });
             
           await client.on('ready', () => {
        client.request('SET_ACTIVITY', {activity: activity})
           });
        await client.login({clientId: '882104389660180591'})
      } catch (e) {
            return null
      }
    }

module.exports = {
   DisplayRPC
}




