import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetailList: initialUserDetailsList,
  }

  onDelete = uniqueNo => {
    // console.log(`${uniqueNo}`)
    const {userDetailList} = this.state
    const filteredUserList = userDetailList.filter(
      user => user.uniqueNo !== uniqueNo,
    )
    this.setState({
      userDetailList: filteredUserList,
    })
  }

  onSearchInputChange = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, userDetailList} = this.state
    // console.log(searchInput)
    const searchResult = userDetailList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onSearchInputChange}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResult.map(eachUser => (
            <UserProfile
              onDelete={this.onDelete}
              userDetails={eachUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
