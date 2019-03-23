import React from 'react'
import TextLoop from 'react-text-loop'
import classes from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const themes = [
  'Pop Culture',
  'Trivia ',
  'Board Game ',
  'Literary',
  'Historical',
  'Foodie',
  'Boozy',
  'Borough',
  'Silver Screen ',
]

const events = [
  'Birthday',
  'Bachelorette',
  'Bar Crawl',
  'Celebration',
  'Bachelor Party',
  'Team Bonding',
]

class RotatingDiv extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullList: false,
    }
  }


  onClick = () => {
    this.setState(state => ({
      fullList: !state.fullList,
    }))
  }
  render() {
    const { fullList } = this.state
    const { classes } = this.props
    const min = 1000
    const max = 1300
    const rand1 = min + Math.random() * (max - min)
    const rand2 = min + Math.random() * (max - min)

    return (
      <div>
        {!fullList ? (
          // <div onClick={this.onClick}>See the full list of suggestions</div>
          null
        ) : null}
        <div>
          {!fullList ? (
            <div className={classes.rotateContainer}>
              <TextLoop
                className={classes.theme}
                mask={true}
                interval={[2700, 3300, 2000]}
                delay={1900}
                springConfig={{ stiffness: 180, damping: 10 }}
                fade={false}
              >
                {themes.map(theme => (
                  <span key={theme.length}>
                    {theme}
                  </span>
                ))}
              </TextLoop>
              <div className={classes.themed}>themed</div>
              <TextLoop
                className={classes.event}
                springConfig={{ stiffness: 110, damping: 10 }}
                interval={[2500, 3000, 3500]}
                delay={800}
                mask={true}
                fade={false}
              >
                {events.map(event => (
                  <span key={event.length}>{event}</span>
                ))}
              </TextLoop>
            </div>
          ) : (
            <div className={classes.fullListContainer}>
              <div>
                {' '}
                Theme Suggestions:
                {themes.map(theme => (
                  <div key={theme.length}>{theme}</div>
                ))}
              </div>
              <div>
                Event Suggestions:
                {events.map(event => (
                  <div key={event.length}>{event}</div>
                ))}
              </div>
              <div />
            </div>
          )}
        </div>
      </div>
    )
  }
}

const styles = theme => ({
  rotateContainer: {
    display: 'inline-grid',
    width: '70%',
    
    gridTemplateAreas: '"theme themed event"',
    gridTemplateColumns: ' 1fr 1fr 1fr',
    

    // '&:nth-child(1)': {
    // justifySelf: 'start',        
    // },
    // '&:nth-child(2)': {
    // justifySelf: 'center',        
    // },
    // '&:nth-child(3)': {
    // justifySelf: 'end',        
    // },
  },

   theme: {
    // width: '100%',
    width: '100%',
    gridArea: 'theme',
    // justifySelf: 'center',
    
  },
  themed:{
    width: '100%',
    gridArea: 'themed',
  },

  event: {
    // width: '100%',
    width: '100%',
    gridArea: 'event',
    // justifySelf: 'end',
    
  },
  fullListContainer: {
    display: 'inline-grid',

    gridTemplateAreas: 'themes events',
    gridTemplateColumns: ' 1fr 1fr',
  }
})

export default withStyles(styles)(RotatingDiv)
