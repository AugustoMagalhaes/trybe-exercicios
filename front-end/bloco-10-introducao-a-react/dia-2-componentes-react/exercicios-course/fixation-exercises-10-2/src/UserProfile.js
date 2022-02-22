import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const altTextUser = `${this.props.user.name}\'s picture`
    return (
      <div>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alternativeText={altTextUser}/>
      </div>
    );
  }
}

export default UserProfile;