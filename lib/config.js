'use babel';

export default {
  editorOptions: {
    title: 'Editor options',
    type: 'object',
    order: 1,
    properties: {
      formatOnSave: {
        title: 'Format on save',
        description: 'Format jinja-flavored SQL on save.',
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
        default: 'true',
        order: 2,
      },
      indent: {
        title: 'Indentation',
        description: 'Number of spaces to indent the code with.',
        type: 'integer',
        default: 2,
        order: 3,
      },
      newLine: {
        title: 'New line',
        description: 'Automatically insert a new line at the end of the file',
        type: 'boolean',
        default: 'true',
        order: 4,
      },
      lowerWords: {
        title: 'Lowercase words',
        description: 'Automatically lowercases words that are not sql functions.',
        type: 'boolean',
        default: 'false',
        order: 5,
      },
      allowCamelcase: {
        title: 'Allow camelcase',
        description: 'This setting does not lowercase camelcased strings when the lowercase word option is checked.',
        type: 'boolean',
        default: 'true',
        order: 6,
      }
    },
  },
};
