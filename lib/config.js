'use babel';

export default {
  editorOptions: {
    title: 'Editor options',
    type: 'object',
    order: 1,
    properties: {
      formatOnSave: {
        title: 'Format on save',
        description: 'Format DBT SQL files on save.',
        type: 'boolean',
        default: false,
        order: 1,
      },
      scopes: {
        title: 'Scopes',
        description: 'Grammar scopes to which format on save is applied.',
        type: 'array',
        default: ['source.sql'],
        items: {
          type: 'string',
        },
        order: 2,
      },
    },
  },
  dbtFormatterOptions: {
    title: 'Formatter options',
    type: 'object',
    order: 2,
    properties: {
      sqlFormat: {
        title: 'The SQL flavor you want to use.',
        type: 'string',
        enum: ['default'],
        default: 'default',
        order: 1,
      },
      functionCase: {
        title: 'SQL reserved function casing.',
        description: 'Change the case of the sql function names (select, from, etc.) to uppercase.',
        type: 'boolean',
        default: 'false',
        order: 2,
      },
      indent: {
        title: 'Indentation',
        description: 'Number of spaces to indent the code with.',
        type: 'integer',
        default: 2,
        order: 3,
      },
    },
  },
};
