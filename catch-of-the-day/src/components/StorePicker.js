import React from 'react';
// import { render } from 'react-dom'; // uses one method from react dom
import { getFunName } from '../helpers'; // imports the function getFunName from the helpers file

class StorePicker extends React.Component {
  // constructor() { // extends the component to custom methods like goToStore
  //   super();
  //   this.goToStore = this.goToStore.bind(this); // binds the goToStore Method to the StorePicker Component. So the "this" Keyword is available
  // }
  goToStore(event) {
    event.preventDefault(); // pass the event as a parameter and then calll preventDefault() to keep the page from reloading
    console.log('You Changed the URL');
    // first grab the text from the box
    const storeId = this.storeInput.value;
    console.log(this.storeInput.value);
    // second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() { // render is bound to the class StorePicker, therefore the...
   // "this" keyword is needed to clall on the method defined above
    return(
    <form className="store-selector" onSubmit={(e) => this.goToStore(e)}> {/* this is the same as having a constructor() and super() bind() the goToStore Method to the StorePicker Component */}
      <h2>Please Enter A Store</h2>
      <input type="text" required placeholder="Store Name"
      defaultValue={ getFunName() } ref={(input) => {this.storeInput = input}} /> {/* getFunName Function invoked after imported above */}
      <button type="submit">Visit Store</button>
    </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
