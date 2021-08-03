import {useStaticQuery, graphql} from 'gatsby'
import {mapEdgesToNodes} from '../utils/helpers'

export const useSiteMenusStructure = () => {
  const {allSanityMenus} = useStaticQuery(
    graphql`
    query {
      allSanityMenus {
        edges {
          node {
            id
            title
            items {
              ... on SanityInternalLink {
                _type
                title
                link {
                  __typename
                  ... on SanityPage {
                    content {
                      main {
                        slug {
                          current
                        }
                      }
                    }
                  }
                  ... on SanityPageWizard {
                    content {
                      main {
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
              }
              ... on SanityInternalLinkWSlug {
                _key
                _type
                url:link
                title
              }
              ... on SanityInternalLinkWChildren {
                _type
                title
                link {
                  content {
                    main {
                      slug {
                        current
                      }
                      title
                    }
                  }
                }
                subItems {
                  link {
                    __typename
                    ... on SanityPage {
                      content {
                        main {
                          slug {
                            current
                          }
                          title
                        }
                      }
                    }
                    ... on SanityPageWizard {
                      content {
                        main {
                          slug {
                            current
                          }
                          title
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  )
  return mapEdgesToNodes(allSanityMenus)
}
