/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Query',
      collapsed: false,
      items: [    
        {
          type: 'category',
          label: 'Transactions',
          items: [
            {
              type: 'autogenerated',
              dirName: 'query/transactions',
            }
          ]
        },
        {
          type: 'category',
          label: 'Blocks',
          items: [
            {
              type: 'autogenerated',
              dirName: 'query/blocks',
            }
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [    
        {
          type: 'autogenerated',
          dirName: 'concepts',
        }
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'autogenerated',
          dirName: 'reference'
        }
      ]
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
