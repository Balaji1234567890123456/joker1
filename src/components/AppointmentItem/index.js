// Write your code here
import './index.css'
import {format} from 'date-fns'
const Balu = props => {
  const {balu, kok} = props
  const {id, title, date, isFavorite} = balu
  const h =
    'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const g =
    'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  const b = isFavorite ? h : g
  const v = format(new Date(date))
  return (
    <li className="mol">
      <div className="lol">
        <h1>{title}</h1>
        <p>{v}</p>
      </div>
      <img src={b} />
    </li>
  )
}
export default Balu
