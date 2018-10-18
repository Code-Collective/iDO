# Contributing to Code Collective projects

## Repository layout

We use a monorepo, and each top-level subfolder contains files specific to a project.

## Code style

We favour using widely adopted code styles over our own preferred ones. For JavaScript, the [Standard style guide][ssg] should be followed when in doubt. When changing existing code, either follow the current style or convert everything into the new style (preferrably in a separate commit).

## READMEs

In `README` files, any instructions to run commands should assume the reader will run them from the same directory as the file. There should be instructions for dependencies, setup, and any environment that currently exists (dev, test, prod).

Also, any commands requiring credentials should retrieve them from environment variables, and there should be instructions on how to set such variables. Environment variables should be stored in a `.env` file within the app root directory. This file is NOT source controlled and should be in `.gitignore`.

## Git

We favour `git rebase` over `git merge` for bringing changes from `master` into feature branches, and we practice good [commit hygiene][ch].

We name our branches in the format `<App>/<Feature>` using '-' as a separator.

#### Example

```bash
$ git push origin frontend/implement-authentication'
```

## Passwords

We store secrets (usernames and passwords) in a [KeePassX][kp] database located at [`secrets.kdbx`][kp].

[ssg]: https://standardjs.com/
[ch]: http://www.ericbmerritt.com/2011/09/21/commit-hygiene-and-git.html
[kp]: https://www.keepassx.org/