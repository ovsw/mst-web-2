/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const fs = require('fs')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createRedirect, createPage } = actions;

  // Query Pages
  const pagesQuery = await graphql(`
    {
      allSanityPage(
        filter: { content: { main: { slug: { current: { ne: null } } } } }
      ) {
        edges {
          node {
            _rawContent(resolveReferences: { maxDepth: 9 })
          }
        }
      }
      allSanityPageHidden(
        filter: { content: { main: { slug: { current: { ne: null } } } } }
      ) {
        edges {
          node {
            _rawContent(resolveReferences: { maxDepth: 9 })
          }
        }
      }
      allSanityPagePerformance(
        filter: { content: { main: { slug: { current: { ne: null } } } } }
      ) {
        edges {
          node {
            _rawContent(resolveReferences: { maxDepth: 9 })
          }
        }
      }
      allSanityPost(
        filter: {
          content: {
            main: { publishedAt: { ne: null }, slug: { current: { ne: null } } }
          }
        }
        sort: { fields: content___main___publishedAt, order: DESC }
      ) {
        edges {
          node {
            _rawContent(resolveReferences: { maxDepth: 9 })
          }
        }
      }
      allSanityPageWizard {
        edges {
          node {
            _rawContent(resolveReferences: { maxDepth: 9 })
          }
        }
      }
      sanityRedirects(_id: { eq: "redirects" }) {
        list {
          fromPath
          toPath
          isPermanent
        }
      }
    }
  `);

  if (pagesQuery.errors) {
    throw pagesQuery.errors;
  }

  // pages

  const pages = pagesQuery.data.allSanityPage.edges || [];
  const pagesHidden = pagesQuery.data.allSanityPageHidden.edges || [];

  const allGeneralPages = [...pages, ...pagesHidden];

  const performancePages = pagesQuery.data.allSanityPagePerformance.edges || [];

  const blogPostPages = pagesQuery.data.allSanityPost.edges || [];

  const wizardPages = pagesQuery.data.allSanityPageWizard.edges || [];

  allGeneralPages.forEach((edge) => {
    const path = `/${
      edge.node._rawContent.main.slug.current === 'home'
        ? ''
        : edge.node._rawContent.main.slug.current
    }/`;

    reporter.info(`Creating page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/page.js'),
      context: { ...edge.node._rawContent },
    });
  });

  performancePages.forEach((edge) => {
    const path = `/performances/${edge.node._rawContent.main.slug.current}/`;

    reporter.info(`Creating performance page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/pagePerformance.js'),
      context: { ...edge.node._rawContent },
    });
  });

  blogPostPages.forEach((edge) => {
    const path = `/blog/${edge.node._rawContent.main.slug.current}/`;

    reporter.info(`Creating blog post page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/post.js'),
      context: { ...edge.node._rawContent },
    });
  });

  wizardPages.forEach((edge) => {
    const path = `/${edge.node._rawContent.main.slug.current}/`;

    reporter.info(`Creating wizard page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/wizard.js'),
      context: { ...edge.node._rawContent },
    });
  });

  // redirects

  // redirect home page to /virtual/
  createRedirect({
    fromPath: '/',
    toPath: '/virtual/',
    isPermanent: true,
    force: true,
  });

  // fixed redirects

  // aftershchool typo
  createRedirect({
    fromPath: '/programming/aftershchool-package/staffing-training/',
    toPath: '/programming/afterschool-package/staffing-training/',
    isPermanent: true,
    force: true,
  });
  createRedirect({
    fromPath: '/programming/aftershchool-package/program-development/',
    toPath: '/programming/afterschool-package/program-development/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/aftershchool-package/production-supplies/',
    toPath: '/programming/afterschool-package/production-supplies/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/aftershchool-package/marketing-and-publicity/',
    toPath: '/programming/afterschool-package/marketing-and-publicity/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/aftershchool-package/supervision-and-support/',
    toPath: '/programming/afterschool-package/supervision-and-support/',
    isPermanent: true,
  });

  // about
  createRedirect({
    fromPath: '/performances/about-us/',
    toPath: '/about-us/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/about-us/',
    toPath: '/about-us/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/families/about-us/',
    toPath: '/about-us/',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/performances/about-us/directors/',
    toPath: '/about-us/our-directors/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/about-us/directors/',
    toPath: '/about-us/our-directors/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/families/about-us/directors/',
    toPath: '/about-us/our-directors/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/virtual/about-us/directors/',
    toPath: '/about-us/our-directors/',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/performances/about-us/year-round-staff/',
    toPath: '/about-us/year-round-staff/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/about-us/year-round-staff/',
    toPath: '/about-us/year-round-staff/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/families/about-us/year-round-staff/',
    toPath: '/about-us/year-round-staff/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/virtual/about-us/year-round-staff/',
    toPath: '/about-us/year-round-staff/',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/programming/about-us/summer-staff/',
    toPath: '/about-us/summer-staff/',
    isPermanent: true,
  });

  // jobs
  createRedirect({
    fromPath: '/performances/jobs/',
    toPath: '/jobs/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/jobs/',
    toPath: '/jobs/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/families/jobs/',
    toPath: '/jobs/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/virtual/jobs/',
    toPath: '/jobs/',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/performances/jobs/year-round-jobs/',
    toPath: '/jobs/year-round-jobs/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/jobs/year-round-jobs/',
    toPath: '/jobs/year-round-jobs/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/families/jobs/year-round-jobs/',
    toPath: '/jobs/year-round-jobs/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/virtual/jobs/year-round-jobs/',
    toPath: '/jobs/year-round-jobs/',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/performances/jobs/online-application/',
    toPath: '/jobs/online-application/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/jobs/online-application/',
    toPath: '/jobs/online-application/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/families/jobs/online-application/',
    toPath: '/jobs/online-application/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/virtual/jobs/online-application/',
    toPath: '/jobs/online-application/',
    isPermanent: true,
  });

  // ////
  createRedirect({
    fromPath: '/for-summer-camps/camp-director-faq/',
    toPath: '/programming/faqs/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/about-us/faq/',
    toPath: '/programming/faqs/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/for-summer-camps/game-shows-and-performances/',
    toPath: '/performances/list/',
    isPermanent: true,
  });
  createRedirect({
    fromPath:
      '/for-summer-camps/game-shows-and-performances/2018-performances/',
    toPath: '/performances/list/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/for-summer-camps/game-shows-and-performances/edutainment/',
    toPath: '/performances/list/#interactive-experiences/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/for-summer-camps/game-shows-and-performances/game-shows/',
    toPath: '/performances/list/#game-shows/',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/for-summer-camps/spotlight-programming/',
    toPath: '/programming/afterschool-package/program-development/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/camp-package/program-development/',
    toPath: '/programming/afterschool-package/program-development/',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/for-summer-camps/theater-in-a-box/',
    toPath: '/programming/camp-package/production-supplies/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/parents/birthday-parties/',
    toPath: '/virtual/birthday-parties/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/parents/book-now/',
    toPath: '/virtual/get-a-quote/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/parents/camp-partners/',
    toPath: '//',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/schools-and-orgs/afterschool-programs/',
    toPath: '/programming/afterschool-package/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/schools-and-orgs/book-now/',
    toPath: '/performances/get-a-performance-quote/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/schools-and-orgs/jewish/',
    toPath: '/performances/list/#perform-judaism/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/schools-and-orgs/jewish/perform-judaism/',
    toPath: '/performances/list/#perform-judaism/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/schools-and-orgs/jewish/pj-library-storybook-theater/',
    toPath: '/performances/list/#perform-judaism/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/schools-and-orgs/performances/',
    toPath: '/performances/list/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/schools-and-orgs/performances/edutainment/',
    toPath: '/performances/list/#interactive-experiences/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/schools-and-orgs/performances/einstein-presidential/',
    toPath: '/performances/find/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/schools-and-orgs/performances/johnny-applebaum/',
    toPath: '/performances/find/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/schools-and-orgs/performances/multi-booking-incentive/',
    toPath: '/performances/find/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/schools-and-orgs/performances/smf/',
    toPath: '/performances/list/#game-shows/',
    isPermanent: true,
  });

  // contact
  createRedirect({
    fromPath: '/performances/contact-us/',
    toPath: '/contact-us/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/programming/contact-us/',
    toPath: '/contact-us/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/families/contact-us/',
    toPath: '/contact-us/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/virtual/contact-us/',
    toPath: '/contact-us/',
    isPermanent: true,
  });

  // don't exist anymore
  createRedirect({
    fromPath: '/virtual/upcoming-events/',
    toPath: '/virtual/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/virtual/promotions/',
    toPath: '/virtual/',
    isPermanent: true,
  });
  createRedirect({
    fromPath:
      '/for-summer-camps/game-shows-and-performances/trainings-and-workshops/',
    toPath: '/performances/workshops-and-training/',
    isPermanent: true,
  });

  // blog
  createRedirect({
    fromPath: '/programming/blog/',
    toPath: '/blog/',
    isPermanent: true,
  });

  // process redirects from Sanity
  const redirectsList = pagesQuery.data.sanityRedirects.list || [];
  redirectsList.forEach(({ fromPath, toPath, isPermanent }) => {
    reporter.info(
      `Creating redirect: ${fromPath} -> ${toPath} - ${
        isPermanent ? '301' : '302'
      }`
    );
    createRedirect({ fromPath, toPath, isPermanent });
  });

  // Query Products
  //   const productsQuery = await graphql(`
  //   {
  //     allSanityProduct {
  //       edges {
  //         node {
  //           _rawContent(resolveReferences: {maxDepth: 9})
  //         }
  //       }
  //     }
  //   }
  // `)

  //   if (productsQuery.errors) {
  //     throw productsQuery.errors
  //   }

  //   const products = productsQuery.data.allSanityProduct.edges || []
  //   products.forEach((edge, index) => {
  //   const path = `/products/${edge.node._rawContent.main.slug.current}`

  //     createPage({
  //       path,
  //       component: require.resolve('./src/templates/product.tsx'),
  //       context: {...edge.node._rawContent},
  //     })
  //   })

  //   // Query Collections
  //   const collectionsQuery = await graphql(`
  //   {
  //     allSanityCollection {
  //       edges {
  //         node {
  //           _rawContent(resolveReferences: {maxDepth: 9})
  //         }
  //       }
  //     }
  //   }
  // `)

  //   if (collectionsQuery.errors) {
  //     throw collectionsQuery.errors
  //   }

  //   const collections = collectionsQuery.data.allSanityCollection.edges || []
  //   collections.forEach((edge, index) => {
  //     const path = `/collection/${edge.node._rawContent.main.slug.current}`

  //     createPage({
  //       path,
  //       component: require.resolve('./src/templates/page.tsx'),
  //       context: {...edge.node._rawContent},
  //     })
  //   })
};
