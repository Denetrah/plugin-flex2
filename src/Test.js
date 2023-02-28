// Challenge 4: Add to Zerolet array1 = [1, 4, 11, 2, 37, -4]let array2 = [0, 21, 33, 5, 0, -9]let array3 = [0, 1, 2, 3, 4, 5]/*Given an array of numbers, console.log 'true' if anytwo numbers in the array add to zero, otherwise long 'false'.*/



// let array1 = [1, 4, 11, 2, 37, -4]
// let array2 = [0, 21, 33, 5, 0, -9]
// let array3 = [0, 1, 2, 3, 4, 5] 


// const numbers = [1, 2, -3, 4, -2, 0];
// let foundPair = false;
// for (let i = 0; i < numbers.length; i++) {
//  for (let j = i + 1; j < numbers.length; j++) {
//  if (numbers[i] + numbers[j] === 0) {
//  foundPair = true;
//  break;
//  }
// }
//  if (foundPair) break;
// }
// console.log(foundPair);


// import React from "react";
// import useForm from "react-hook-form"

// export default class CustomView extends React.Component {
//     render() {
//         const {register, handleSubmit, errors} = useForm()
        
//         return (

//             <form >
//                 <div>
//                     {/* <h1> Let's get started</h1> */}
//                     <label htmlFor="name">Name</label>
//                     <input type = "text" name="name" placeholder="Enter Friendly Name" />
                   
//                     <label  htmlFor="name">Worker Attributes</label>
//                     <input type= "text" name="Worker Attributes" placeholder="Enter worker Attributes" />
//                 </div>
            
//             <button type="submit">Create Worker</button>
//             </form>
//         )
//     }
// }


// import React from "react";
// import { useForm } from "react-hook-form";

// export default class CustomView extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state= {
//             loading:false
//         }
//         this.onSubmit = this.onSubmit.bind(this)
//     }
//     onSubmit(data) {
//         console.log(data)
//     }

//     render() {
//         const { register, handleSubmit, errors} = this.props
        
//         return (

//             <form onSubmit={handleSubmit(this.onSubmit)} >
//                 <div>
//                     {/* <h1> Let's get started</h1> */}
//                     <label htmlFor="name">Name</label>
//                     <input type = "text" name="name" placeholder="Enter Friendly Name" />
                   
//                     <label  htmlFor="name">Worker Attributes</label>
//                     <input type= "text" name="Worker Attributes" placeholder="Enter worker Attributes" />
//                 </div>
            
//             <button type="submit">Create Worker</button>
//             </form>
//         )
//     }
// }

// function App(props) {
//     const form = useForm()
//     return <CustomView {...props} {...form} />
// }

// const rootElement = document.getElementById("root")
// React.DOM.render(<App />, rootElement)


// import React, { Component } from 'react';
// import { Twilio } from "twilio"
// export default class CreateWorkerForm extends Component {
//   state = {
//     friendlyName: '',
//     attributes: '',
//   };
//   handleInputChange = (event) => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value,
//     });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     // Replace this with your Twilio Flex API call to create a worker
//     console.log(this.state);
//   };
//   render() {
//     return (
//  <form onSubmit={this.handleSubmit}>
//     <div>
//         <label htmlFor="friendlyName">Friendly Name:
//         </label>
//         <input
//             type="text"
//             id="friendlyName"
//             name="friendlyName"
//             value={this.state.friendlyName}
//             onChange={this.handleInputChange}
//           />
//  </div>
 
//  <div>
//     <label htmlFor="attributes">Attributes:</label>
//     <textarea
//             id="attributes"
//             name="attributes"
//             value={this.state.attributes}
//             onChange={this.handleInputChange}
//           /></div><button type="submit">Create Worker</button></form>
//     );
//   }
// }


// mport React, { useState } from 'react';
// const CreateWorkerForm = () => {
//   const [workerAttributes, setWorkerAttributes] = useState({
//     friendlyName: '',
//     activitySid: ''
//   });
//   const handleInputChange = event => {
//     setWorkerAttributes({
//       ...workerAttributes,
//       [event.target.name]: event.target.value
//     });
//   };
//   const handleSubmit = async event => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/create-worker', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(workerAttributes)
//       });
//       const data = await response.json();
//       console.log('Success:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
//   return (<form onSubmit={handleSubmit}><label>
//         Friendly Name:<input
//           type="text"
//           name="friendlyName"
//           value={workerAttributes.friendlyName}
//           onChange={handleInputChange}
//         /></label><br /><label>
//         Activity SID:<input
//           type="text"
//           name="activitySid"
//           value={workerAttributes.activitySid}
//           onChange={handleInputChange}
//         /></label><br /><button type="submit">Create Worker</button></form>
//   );
// };


// handleSubmit = (event) => {
//        event.preventDefault();
//        const { friendlyName, attributes } = this.state;
//        fetch('https://react-twilio-serverless-7634-dev.twil.io/CreateWorker', {
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json'
//          },
//          body: JSON.stringify({ friendlyName, attributes })
//        })
//          .then(response => response.json())
//          .then(data => {
//            console.log(data);
//          })
//          .catch(error => {
//            console.error(error);
//          });
//      };


//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'



//     const response = new Twilio.Response()

//     response.appendHeader('X-Content-Type-Options', 'nosniff')
//     response.appendHeader('Access-Control-Allow-Headers', 'Content-Type')
//     response.appendHeader('Content-Type', 'application/json')
//     response.appendHeader('Access-Control-Allow-Orgin', '*')
//     response.appendHeader('Access-Control-Allow-Method', '*')

//     const response = new Twilio.Response() 
//     //   response.set({
//     //       'Access-Control-Allow-Origin': '*',
//     //       'Access-Control-Allow-Headers': '*',
//     //       'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT,OPTIONS'
//     // });
//        response.setHeader('X-Content-Type-Options', 'nosniff')
//        response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
//        response.setHeader('Content-Type', 'application/json')
//        response.setHeader('Access-Control-Allow-Orgin', '*')
//        response.setHeader('Access-Control-Allow-Method', '*')   

//        .then(worker => {
//         // const response = {
//         //     headers: {
//         //      'Access-Control-Allow-Origin': '*',
//         //      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         //      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
//         //     },
//         //     statusCode: 200,
//         //     body: JSON.stringify({worker})
//         //    };


        
// import React, {Component} from "react";
// import axios from 'axios'

// export default class CustomView extends Component {
//     state = {
//         friendlyName: '',
//         title: '',
//     }
//     handleInputChange = (event) => {
//         const {target} = event;
//         const value = target.value;
//         const name = target.name
//         this.setState({
//             [name]:value,
//         });
//     }
//     handleSubmit = (event) => {
       
//         event.preventDefault()
//         const {friendlyName, title} = this.state;
//         console.log('friendlyName:',friendlyName)
//        console.log('attribbutes' , title)
//         axios 
//         .post('https://react-twilio-serverless-7634-dev.twil.io/CreateWorker',{
//             friendlyName,
//             title,
//         })
//         .then((res) => {
//             console.log(res.data)
//             alert("New Worker Created");
//             this.setState({
//                 friendlyName: '',
//                 title:'',
//             })
//         })
//         .catch(error => {
//             console.error(error)
//         })
//         // console.log(this.state)
        
//     }
//     render() {
        
        
//         return (

//             <form onSubmit={this.handleSubmit}>
//                 <div>
                 
//                     <label htmlFor="friendlyName">Friendly Name:</label>
//                     <input 
//                     type="text" 
//                     id="friendlyName"
//                     name="friendlyName" 
//                     placeholder="Enter Friendly Name"
//                     value={this.state.friendlyName}
//                     //defaultValue=""
//                     onChange ={this.handleInputChange} />
//                    </div>

//                    <div>
//                     <label  htmlFor="title">Worker Attributes:</label>
//                     <textarea
//                     type= "text" 
//                     name="title" 
//                     placeholder="Enter worker Attributes"
//                     id= "title"
//                     value={this.state.title}
//                     //defaultValue=""
//                     onChange={this.handleInputChange} />
//                 </div>
            
//             <button id="trigger" type="submit">Create Worker</button>
//             </form>
//         )
//     }
// }
