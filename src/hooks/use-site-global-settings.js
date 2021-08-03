import {useStaticQuery, graphql} from 'gatsby'

export const useSiteGlobalSettings = () => {
  const {sanitySiteGlobal} = useStaticQuery(
    graphql`
    query {
        sanitySiteGlobal(_id: {eq: "siteGlobal"}) {
          _rawContent(resolveReferences: {maxDepth: 9})
      }
    }
  `
  )
  return sanitySiteGlobal._rawContent
}
