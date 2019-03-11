import { Component } from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SearchIcon from '@material-ui/icons/Search'

import { OneIcon, TwoIcon, ThreeIcon, FourIcon } from './icons/numbers.js'
import { translate } from 'react-i18next'

const HowItWorks = translate('howitworks')(({ t }) => (
  <div className="how-it-works">
    <VerticalTimeline>
      <VerticalTimelineElement className="vertical-timeline-element--work" icon={<OneIcon />}>
        <h4 className="vertical-timeline-element-subtitle">{t('step-1')}</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work" icon={<TwoIcon />}>
        <h4 className="vertical-timeline-element-subtitle">{t('step-2')}</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work" icon={<ThreeIcon />}>
        <h4 className="vertical-timeline-element-subtitle">{t('step-3')}</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work" icon={<FourIcon />}>
        <h4 className="vertical-timeline-element-subtitle">{t('step-4')}</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--last" icon={<SearchIcon />} />
    </VerticalTimeline>
  </div>
))

export default HowItWorks
