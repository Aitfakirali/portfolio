---
sidebar_position: 4
---

# Rules and Conventions
In order to force a consistent code style and avoid common issues in the codebase, we have a set of rules and conventions that we follow and enforced by the starter.

## Typescript

This starter uses Typescript to provide type safety and to avoid common bugs in the codebase. 

## Naming

## Linting

## Git Hooks with Husky

The starter comes with a set of git hooks that help us to enforce rules and conventions. Those hooks are configured using [Husky](https://typicode.github.io/husky/#/). and here is the complete list of the hooks:

### pre-commit
As the name suggest, this hook will run before each commit and it will make sure you are not committing directly on the main branch and it will run the linter and typescript checking on the staged files.

### commit-msg

This hook will check if the commit message is following the conventional commit format. If it's not, the commit will be aborted and will show you what going wrong with your commit message.

We are using [commitlint](https://commitlint.js.org/#/) to check if the commit message is following the conventional commit format.

In general your commit message should follow this format:

```
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Real world examples can look like this:

```
fix(ui): fix input width
feat(ui): add button variants
feat(api): add usePost query hook
```

`type` should be one of the following: build, chore, ci ,docs,feat,fix, perf, refactor, revert, style or test.

## 🔗 Resources

- [Typescript](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Husky](https://typicode.github.io/husky/#/)
- [commitlint](https://commitlint.js.org/#/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Eslint](https://eslint.org/)

