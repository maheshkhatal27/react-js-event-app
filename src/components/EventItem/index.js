import './index.css'

const EventItem = props => {
  const {eventDetails, onEventClick} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails
  const sendEventInfo = () => {
    onEventClick(registrationStatus)
  }

  return (
    <li className="event-list-item">
      <button className="button-img" type="button" onClick={sendEventInfo}>
        <img src={imageUrl} alt="event" className="event-img-resize" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
