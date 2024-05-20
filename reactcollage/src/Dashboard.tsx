import React from 'react'
interface DashboardProps {
  userName: string;
  password: string;
};
export default class Dashboard extends React.Component<DashboardProps> {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.userName}!</h1>
        <h2>Your password is: {this.props.password}</h2>
      </div>
    )
  }
}