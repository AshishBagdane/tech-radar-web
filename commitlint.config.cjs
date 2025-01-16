module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'ci'],
    ],
    'scope-case': [2, 'always', 'kebab-case'],
    'scope-empty': [0, 'never'], // Makes scope optional
    'subject-case': [2, 'always', 'lower-case'], // Enforces lowercase
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'body-max-line-length': [2, 'always', 100],
  },
};
