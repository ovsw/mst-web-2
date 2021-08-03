import {useStaticQuery, graphql} from 'gatsby'
import {mapEdgesToNodes} from '../utils/helpers'

export const usePerformancesMetaData = () => {
  const {allSanityPagePerformance} = useStaticQuery(
    graphql`
    query {
      allSanityPagePerformance {
        edges {
          node {
            content {
              _type
              main {
                slug {
                  current
                }
                title
              }
              performance {
                ageRange
                hollidays
                noOfParticipants
                performanceType
                themes
                image {
                  asset {
                    _id
                  }
                }
              }
            }
            _id
          }
        }
      }
    }
  `
  )

  const performanceNodes = mapEdgesToNodes(allSanityPagePerformance)

  const formattedPerformanceMetaData = performanceNodes.map(
    (
      {
        content: {
          main: {
            slug,
            title
          },
          performance: {
            ageRange,
            hollidays,
            noOfParticipants,
            performanceType,
            themes,
            image
          }
        }
      }
    ) => {
      const formattedPerformance = {
        title: title,
        slug: slug.current,
        ageRange: ageRange,
        holidays: hollidays,
        noOfParticipants: noOfParticipants,
        performanceType: performanceType,
        themes: themes,
        image: image
      }
      // console.log(formattedPerformance)
      return formattedPerformance
    }
  )
  // console.log(formattedPerformanceMetaData)

  return formattedPerformanceMetaData
}
