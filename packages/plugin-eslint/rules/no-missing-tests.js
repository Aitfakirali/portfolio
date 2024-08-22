'use strict';

const { existsSync } = require('node:fs');
const path = require('node:path');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow files without a corresponding test file',
    },
    schema: [
      {
        type: 'array',
        minItems: 1,
        items: {
          type: 'object',
          required: ['filePath'],
          properties: {
            filePath: {
              type: 'string',
            },
          },
          additionalProperties: false,
        },
      },
    ],
    messages: {
      error: 'File is missing a corresponding test file.',
    },
  },
  create(context) {
    /** @type {{filePath:string,testPaths:string[],hasTestSuffix?:boolean}[]} */
    const config = context.options[0];

    // In path
    if (!context.filename.includes(config[0].filePath)) {
      return {};
    }

    // Is not Story or __test__
    if (
      context.filename.includes('.stories.') ||
      context.filename.includes('__test__')
    ) {
      return {};
    }

    // Not a component (theme.ts, mock.ts).
    if (!context.filename.includes('.tsx')) {
      return {};
    }

    const filename = context.filename
      .replace(config[0].filePath, '')
      .replace(/\.([jt]sx?|m[jt]s|c[jt]s)$/, '')
      .split('/')
      .pop();

    // Add /__test__/ to path.
    const list = context.filename.split('/');
    const name = list.pop();
    list.push('__test__');
    list.push(name.replace('.tsx', '.test.tsx'));

    const possibleTestPath = list.join('/');
    const foundMatchingTest = existsSync(possibleTestPath);

    if (foundMatchingTest) {
      // File has corresponding test file.
      return {};
    }

    return {
      Program(node) {
        // File is missing corresponding test file.
        context.report({
          node,
          loc: { line: 1, column: 0 }, // Mark only first character as a violation to avoid annoyingly highlighting everything in the file as a violation.
          messageId: 'error',
        });
      },
    };
  },
};
