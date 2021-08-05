import React from "react";
import Header from "./Header";

class HeaderContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={user:null};
    }
    componentDidMount()
    {
        this.fetchUserData();
    }
    fetchUserData()
    {
        this.setState({user:{name:"anshika"}});
    }
    render()
    {
        
        return this.state.user?<Header user={this.state.user}/>:"No user found";
            
        
    }
}

export default HeaderContainer;