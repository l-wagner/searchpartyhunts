import { translate } from 'react-i18next'
import Socials from './socials'

const Footer = ({ t }) => (
	<footer>
	<p className="test" ></p>
	<div>
	<Socials/>
	</div>
	<p className="test" />
	</footer>
	)

export default translate('footer')(Footer)
