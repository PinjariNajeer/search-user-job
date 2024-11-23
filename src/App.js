import {Component} from 'react';
import UserProfile from './component/Userprofile/index';
import './index.css'


const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  },
  {
    uniqueNo: 5,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Najeer Basha',
    role: 'Frented Developer'
  },
  {
    uniqueNo: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Lalu',
    role: 'FullStack Developer'
  },
  {
    uniqueNo: 7,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'PeeranBee',
    role: 'Software Developer'
  }
]


class App extends Component{

  state = {
    searchInput: "",
    userDetailsList: initialUserDetailsList
  }
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value});

  }
  onDeleteUserss = uniqueNo => {
    const {userDetailsList} = this.state;
    const filteredUser = userDetailsList.filter(user =>
      user.uniqueNo !== uniqueNo
    )
    this.setState({userDetailsList: filteredUser});
  }
  render(){
    const {searchInput, userDetailsList} = this.state;
    const filteredUsers = userDetailsList.filter(user =>
      user.name.includes(searchInput)
    );

    return(
      <div className='app-container'>
          <h1 className='title'> Users List</h1>
          <input type="search" placeholder="Search"  onChange={this.onChangeSearchInput}/>
          <ul className='list-container'>
            {filteredUsers.map((eachItem) => (
            <UserProfile onDeleteUserss={this.onDeleteUserss} userDetails = {eachItem} key={eachItem.uniqueNo} />
            ))}
          </ul>
        </div>
    )
  }
}

export default App;
