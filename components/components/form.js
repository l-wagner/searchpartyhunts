import EmailIcon from '@material-ui/icons/MailOutline'
import MessageIcon from '@material-ui/icons/Message'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'

export default () => (
  <div className="contact">
    <form method="POST" action="https://formspree.io/info@searchpartyhunts.com">
      <div className="input-container">
        <span className="icon">
          <PermIdentityIcon nativeColor="white" />
        </span>
        <input type="text" placeholder="Name" name="name" />
      </div>
      <div className="input-container">
        <span className="icon">
          <EmailIcon nativeColor="white" />
        </span>
        <input type="text" placeholder="Email" name="email" />
      </div>
      <div className="input-container ">
        <span className="icon">
          <MessageIcon nativeColor="white" />
        </span>
        <textarea rows="4" type="text" placeholder="Your Message!" name="message" />
      </div>
      <button className="contact-btn" type="submit" value="Submit"> Send!</button>
    </form>
  </div>
)
