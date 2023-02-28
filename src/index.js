import * as FlexPlugin from '@twilio/flex-plugin';

import TwoPlugin from './TwoPlugin';

FlexPlugin.loadPlugin(TwoPlugin);





// import React, {Component} from "react";
// // import { Flex Plugin } from 'flex-plugin';
// import { SyncClient } from 'twilio-sync';

// export default class CustomView extends Component {
//     constructor() {
//         super(...arguments)
//         this.state = {
//             days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//             hoursofOperation: {}
//         }
//     }
    // componentDidMount() {
    //      // Initialize the Sync client
    //      this.syncClient = new SyncClient(this.props.token);
    //      // Fetch the Sync Map data
    //      this.syncClient.map('hours-of-operation').then(map => {
    //       this.map = map;
          // Subscribe to changes in the Sync Map data
        //   this.map.on('itemUpdated', event => {
        //    this.setState({
        //     hoursOfOperation: event.item.value
        //    });
        //   });
          // Get the current hours of operation data
    //       this.map.get().then(item => {
    //        this.setState({
    //         hoursOfOperation: item.value
    //        });
    //       });
    //      });
    //  }
    //  handleAddHoursOfOperation(day, startTime, endTime) {
         // Update the hours of operation data in the Sync Map
    //      this.map.set(day, { startTime, endTime }).then(item => {
    //       this.setState({
    //        hoursOfOperation: {
    //         ...this.state.hoursOfOperation,
    //         [day]: item.value
    //        }
    //       });
    //      });
    //     }
    //     render() {
    //      return (
    //       <div>
    //        <h2>Add Hours of Operation</h2>
    //        <select>
    //         {this.state.days.map(day => (
    //          <option key={day} value={day}>
    //           {day}
    //          </option>
    //         ))}
    //        </select>
    //        <input type="text" placeholder="Start Time" />
    //        <input type="text" placeholder="End Time" />
    //        <button onClick={() => this.handleAddHoursOfOperation(/* day, startTime, endTime */)}>
    //         Add
    //        </button>
    //        <hr />
    //        <h2>Hours of Operation</h2>
    //        <ul>
    //         {Object.entries(this.state.hoursOfOperation).map(([day, hours]) => (
    //          <li key={day}>
    //           {day}: {hours.startTime} - {hours.endTime}
    //          </li>
    //         ))}
    //        </ul>
    //       </div>
    //      );
    //     }
    //    }
       
       



    
// exports.handler = function(context, event, callback) {
//     const client = context.getTwilioClient();
//     client.sync
//      .services(context.SYNC_SERVICE_SID)
//      .documents("hours")
//      .fetch()
//      .then(document => {
//       const newData = {
//        ...document.data,
//        "Sat": "Closed"
//       };
//       return document.update({ data: newData });
//      })
//      .then(document => {
//       callback(null, { success: true });
//      })
//      .catch(error => {
//       callback(error);
//      });
//    };create new item in doc 
// exports.handler = function(context, event, callback) {
//     const client = context.getTwilioClient();
//     const newDay = event.newDay;
//     const openHours = event.openHours;
//     const closeHours = event.closeHours;
//     const id = event.id
    
//     client.sync
//      .services(context.SYNC_SERVICE_SID)
//      .documents("hours")
//      .fetch()
//      .then(document => {
        // let currentId = 0;
        // if (document.data.hasOwnProperty(id)){
        //     currentId = document.data[newDay].id;
        // }
    // const newData = {
    //  ...document.data,
    //    [newDay]: {
        // id: currentId + 1,
        // openHrs: openHours,
        // closedHrs: closeHours
        // openHours, closeHours, id
//     }
//      };
//      return document.update({ data: newData });
//     })
//     .then(document => {
//      callback(null, { success: true });
//     })
//     .catch(error => {
//      callback(error);
//     });
//    };