/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line

import Controls from './controls/'
import PerformancesContainer from './performances-container'

class Wizard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      userInputContainerClicked: false,
      // each filter name corresponds with a performance attribute from performances
      // all filters are initially turned off  / inactive / false,
      passingTags: {
        performanceType: {
          interactive: {
            title: 'Interactive',
            isActive: false
          },
          game: {
            title: 'Game Shows',
            isActive: false
          },
          mystery: {
            title: 'Mystery',
            isActive: false
          },
          custom: {
            title: 'Custom Experiences',
            isActive: false
          },
          judaism: {
            title: 'Perform Judaism',
            isActive: false
          }
        },
        ageRange: {
          prek: {
            title: 'Pre-K',
            isActive: false
          },
          k2: {
            title: 'Grades K-2',
            isActive: false
          },
          g36: {
            title: 'Grades 3-6',
            isActive: false
          },
          g7plus: {
            title: 'Grades 7+',
            isActive: false
          },
          mixed: {
            title: 'A bit of Everything',
            isActive: false
          }
        },
        noOfParticipants: {
          o001030: {
            title: '1-30',
            isActive: false
          },
          o030075: {
            title: '30-75',
            isActive: false
          },
          o075150: {
            title: '75-150',
            isActive: false
          },
          o150250: {
            title: '150-250',
            isActive: false
          },
          o250500: {
            title: '250+',
            isActive: false
          }
        },
        themes: {
          'arts-culture': {
            title: 'Arts & Culture',
            isActive: false
          },
          charity: {
            title: 'Charity',
            isActive: false
          },
          'color-war': {
            title: 'Color War',
            isActive: false
          },
          diversity: {
            title: 'Diversity',
            isActive: false
          },
          environmental: {
            title: 'Environmental Awareness',
            isActive: false
          },
          'full-day': {
            title: 'Full Day Experiences',
            isActive: false
          },
          'fun-for-adults': {
            title: 'Fun for Adults Too',
            isActive: false
          },
          history: {
            title: 'History',
            isActive: false
          },
          independence: {
            title: 'Independence',
            isActive: false
          },
          israel: {
            title: 'Israel',
            isActive: false
          },
          literacy: {
            title: 'Literacy',
            isActive: false
          },
          mystery: {
            title: 'Mystery',
            isActive: false
          },
          nature: {
            title: 'Nature',
            isActive: false
          },
          'pj-library': {
            title: 'PJ Library',
            isActive: false
          },
          respect: {
            title: 'Respect',
            isActive: false
          },
          stem: {
            title: 'STEM',
            isActive: false
          },
          camp: {
            title: 'Summer Camp',
            isActive: false
          },
          superhero: {
            title: 'Superhero',
            isActive: false
          },
          technology: {
            title: 'Technology',
            isActive: false
          },
          women: {
            title: 'Women\'s Empowerment',
            isActive: false
          }
        },
        hollidays: {
          none: {
            title: 'none',
            isActive: false
          },
          chanukah: {
            title: 'Chanukah',
            isActive: false
          },
          christmaschristmas: {
            title: 'Christmas',
            isActive: false
          },
          'earth-day': {
            title: 'Earth Day',
            isActive: false
          },
          'election-day': {
            title: 'Election Day',
            isActive: false
          },
          halloween: {
            title: 'Halloween',
            isActive: false
          },
          'high-holidays': {
            title: 'High Holidays',
            isActive: false
          },
          'independence-day': {
            title: 'Independence Day',
            isActive: false
          },
          passover: {
            title: 'Passover',
            isActive: false
          },
          'presidents-Day': {
            title: 'President\'s Day',
            isActive: false
          },
          purim: {
            title: 'Purim',
            isActive: false
          },
          shabbat: {
            title: 'Shabbat',
            isActive: false
          },
          'tu-bishvat': {
            title: 'Tu BiShvat',
            isActive: false
          }
        }
      }
    }

    this.allFilterClickListener = this.allFilterClickListener.bind(this)
  }

  // **************** UNIVERSAL Filter ****************
  allFilterClickListener (e, filterProp) {
    const name = e.target.dataset.name
    // console.log('FILTER clicked', name)
    this.setState(prevState => ({
      userInputContainerClicked: true,
      passingTags: {
        ...prevState.passingTags,
        [filterProp]: {
          ...prevState.passingTags[filterProp],
          [name]: {
            ...prevState.passingTags[filterProp][name],
            isActive: !prevState.passingTags[filterProp][name].isActive
          }

        }
      }
    }))
  };

  filteredCollected () {
    const collectedTrueKeys = {
      performanceType: [],
      ageRange: [],
      noOfParticipants: [],
      themes: [],
      hollidays: []
    }

    // loop through all tag groups we want to collect active tags for
    Object.keys(collectedTrueKeys).map(key => { // eg key = performanceType
      // then loop through all their tags
      for (const keyy in this.state.passingTags[key]) { // eg keyy = interactive
        // if the tag is active
        if (this.state.passingTags[key][keyy].isActive) {
          // place it into the collectedTrueKeys object, in its tag group array
          collectedTrueKeys[key].push(keyy) // eg collectedTrueKeys[performanceType].push(interactive)
        }
      }
    })
    // console.log('collected active filters:', collectedTrueKeys)
    return collectedTrueKeys
  }

  multiPropsFilter (performances, filters) {
    // grab all the criteria we are filtering by fom the active tags
    const filterKeys = Object.keys(filters) // = [performanceType, ageRange, noOfParticipants, themes, hollidays]

    // we'll be returning a filtered down array of performances to list
    return performances.filter(performance => { // for each performance...
      return filterKeys.every( // ... we'll test if all the active filter criteria is found it that performance's attributes
        key => { // eg = performanceType - check each filter group
          if (!filters[key].length) return true // eg filters[performanceType] == [] - we have no active tags for this filer gorup = automatic pass

          // now that we KNOW we have some active tags in this group
          // if performance[key] is an array - meaning multi-option attributes for performances - which it always is in this particular project...
          if (Array.isArray(performance[key])) { // performance.performanceType = ['interactive', 'game']
            // Loop therough all values of the performance's attribute (which has the same name as the filter group we are checking)...
            // ... and check if at least one of the set values for that performance's attribute is the current active filter's value
            return performance[key] // e.g. performance.performanceType
              .some(attributeValue => // e.g. 'interactive'
              // check if the performance attribute value (eg. 'interactive') is one that we're looking for  (is in filters.performanceType)
                filters[key].includes(attributeValue) // filters.performanceType.includes(interactive) next: filters.performanceType.includes(game).. etc
              )
          }
          // if the performance's attribute is NOT an array (phat chance with performances use case)
          return filters[key].includes(performance[key]) // will pass if the performance attribute's value is found in teh active filters
        })
    })
  }

  filterPerformances () {
    const filteredPerformances = this.multiPropsFilter(
      this.props.performances,
      this.filteredCollected()
    )
    return filteredPerformances
  };

  render () {
    const {performances} = this.props
    const {passingTags, userInputContainerClicked} = this.state

    return (
      <Container>

        <Controls passingTags={passingTags} allFilterClickListener={this.allFilterClickListener} />

        <PerformancesContainer performances={this.filterPerformances()} totalNoOfPerformances={performances.length} userInputContainerClicked={userInputContainerClicked} />

      </Container>
    )
  }
}

export default Wizard
