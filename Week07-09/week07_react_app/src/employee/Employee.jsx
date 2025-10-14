import React
 from "react";
class Employee extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render() {
        return (
            <div>
            <h5>{JSON.stringify(this.props)}</h5>
            <h1>Employee Details</h1>
            <h4>Employee First Name: { this.props.stud.fnm } </h4>
            <h4>Employee Last Name: { this.props.lnm }</h4>
            <h4>Employee Email: { this.props.email } </h4>
            <h4>Employee City: { this.props.city }</h4>
        </div> 
        )
    }
}

export default Employee