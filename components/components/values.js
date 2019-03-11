import { translate } from 'react-i18next'
import MediaQuery from 'react-responsive'


import BusinessIcon from '@material-ui/icons/BusinessCenter'
import HeartIcon from '@material-ui/icons/Favorite'
import SpaIcon from '@material-ui/icons/Spa'
import ListIcon from '@material-ui/icons/List'
import CakeIcon from '@material-ui/icons/Cake'

const Values = ({ t }) => (
  <MediaQuery minWidth={599}>
    {matches => {
      return matches ? (
        <div className="values" data-aos="fade-up" data-aos-duration="500" >
          <div>
            <ListIcon />
            <p>{t('value-2')}</p>
          </div>
          <div>
            <CakeIcon/>
            <p>{t('value-1')}</p>
          </div>
          <div>
            <HeartIcon />
            <p>{t('value-3')}</p>
          </div>
          <div>
            <BusinessIcon />
            <p>{t('value-4')}</p>
          </div>
        </div>
      ) : (
        <div className="values">
          <div data-aos="fade-up" data-aos-duration="500">
            <ListIcon />
            <p>{t('value-2')}</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <CakeIcon/>
            <p>{t('value-1')}</p>
            
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <HeartIcon />
            <p>{t('value-3')}</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <BusinessIcon />
            <p>{t('value-4')}</p>
          </div>
        </div>
      )
    }}
  </MediaQuery>
)

export default translate('values')(Values)
