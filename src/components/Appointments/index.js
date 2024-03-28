// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import Balu from '../AppointmentItem'
class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    listDetails: [],
  }
  onAdd = event => {
    event.preventDefault()

    const {titleInput, dateInput} = this.state
    const newObj = {
      id: uuidv4(),
      title: titleInput,
      date: dateInput,
      isFavorite: false,
    }
    this.setState(p => ({
      listDetails: [...p.listDetails, newObj],
      titleInput: '',
      dateInput: '',
    }))
  }
  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }
  onChangeDate = event => {
    this.setState({dateInput: event.target.value})
  }
  isLiked = id => {
    const {listDetails} = this.state
    listDetails.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, isFavorite: !eachItem.isFavorite}
      }
      return eachItem
    })
  }
  render() {
    const {titleInput, dateInput, listDetails} = this.state
    return (
      <div className="background">
        <div className="loyal">
          <h1>Add Appointment</h1>
          <div className="pol">
            <form className="loyal" onSubmit={this.onAdd}>
              <label for="balu">TITLE</label>
              <input
                type="text"
                id="balu"
                value={titleInput}
                onChange={this.onChangeTitle}
              />
              <label for="roy">DATE</label>
              <input
                type="date"
                id="roy"
                value={dateInput}
                onChange={this.onChangeDate}
              />
              <button type="submit">Add</button>
            </form>
            <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" />
          </div>
          <h1>Appointments</h1>
          <ul>
            {listDetails.map(eachItem => (
              <Balu balu={eachItem} key={eachItem.id} kok={this.isLiked} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
