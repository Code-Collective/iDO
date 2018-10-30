# Contributing to Code Collective projects

## Repository layout

We use a monorepo, and each top-level subfolder contains files specific to a project.

## Code style

We favour using widely adopted code styles over our own preferred ones. For JavaScript, the [Standard style guide][ssg] should be followed when in doubt. This is achieved using the eslint npm package, eslint text editor packager/extension and by configuring to auto-fix on save.

```json
{
    "[Javascript]": {
		"editor.formatOnSave": false
	},
	"eslint.autoFixOnSave": true
}
```

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

## Github

We use [Github][gh] for our source control management, project management and use a feature driven approach to development. If you'd like to contribute you can fork the repo, create your feature branch and submit PR for review. Alternatively if you are invited by a current member you can clone the repo and submit a feature branch directly for review.

If you would like to suggest a feature idea or an implementation of any CI/CD, testing or deployment configuration please add it as an [issue][gi] as this is what we use to manage what to work on next. All members can vote on issues to be implemented.

Finally we use Github's [project board][gpb] to manage workflow and designate tasks.

## Passwords

We store secrets (usernames and passwords) in a [KeePassX][kp] database located at [`secrets.kdbx`][kp].

[ssg]: https://standardjs.com/
[ch]: http://www.ericbmerritt.com/2011/09/21/commit-hygiene-and-git.html
[kp]: https://www.keepassx.org/
[gh]: https://www.github.com
[gi]: https://github.com/Code-Collective/iDO/issues
[gpb]: https://github.com/Code-Collective/iDO/projects/1
