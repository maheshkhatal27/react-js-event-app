import './index.css'

const regisStatusConst = {
  yetToReg: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  regClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props
  // const {eventDetails, eventStatus} = props
  // const {id, imageUrl, name, location, registrationStatus} = eventDetails
  const displayDefault = () => (
    <p className="default-text">
      Click on an event, to view its registration details
    </p>
  )
  const displayYetToRegister = () => (
    <div className="reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-img"
      />
      <p className="desc">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art from.
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )
  const displayRegister = () => (
    <div className="reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="desc-reg">You have already registered for the event</h1>
    </div>
  )
  const displayRegisterClosed = () => (
    <div className="reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="reg-closed-img"
      />
      <h1 className="desc-reg">Registrations Are Closed Now!</h1>
      <p className="reg-closed">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (eventStatus) {
    case regisStatusConst.yetToReg:
      return displayYetToRegister()
    case regisStatusConst.registered:
      return displayRegister()
    case regisStatusConst.regClosed:
      return displayRegisterClosed()
    default:
      return displayDefault()
  }
}

export default ActiveEventRegistrationDetails
