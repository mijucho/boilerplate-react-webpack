import React, { Component } from 'react';


class Form extends React.Component {
    
    render() { 
        return ( 
          <form>
            Message:  <input type="text" name="message"/>
             <input type="Submit" value="Save"/>

         </form>


        );
    }
}
 

export default Form;