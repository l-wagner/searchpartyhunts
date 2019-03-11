import { translate } from 'react-i18next'
import SearchIcon from '@material-ui/icons/Search'
import Form from './form'

const About = ({ t }) => (
  <React.Fragment>
    <div className="label">{t('header')}</div>
    <div className="about-contact">
      <div className="about">
        <div>{t('text')}</div>
        <div><span><SearchIcon/></span>{t('signature')}</div>
        <br />
      </div>
      <Form />
    </div>
  </React.Fragment>
)

export default translate('about')(About)
