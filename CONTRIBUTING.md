# Contributing to CaptianCook

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:
- Reporting an issue
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Code of Conduct
The code of conduct is described in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Our Development Process
All changes happen through pull requests. Pull requests are the best way to propose changes. We actively welcome your pull requests and invite you to submit pull requests directly [here](https://github.com/listentothefrog/captaincook/pulls), and after review, these can be merged into the project.

## How to Commit

1. Fork this repo
   - Clone the repo to your computer.
   - Make sure your shell path is in the root of the project (not inside any of the packages).
   - Navigate into the folder that you would like a make commit on. 
4. After you are done with your changes you can stage the files you are committing with `git add [files]`.
5. Push your changes to the staging branch `git push dev`.
6. Your commit message has now been created, you may open a pull request (read below for further instructions).

## Pull Requests
1. Fork the repo and create your branch (usually named `patch-%the number of PRs you've already made%`) from `dev`.
2. If you've added code that should be tested, add some test examples.
3. Ensure to describe your pull request.

### Frontend **(react + typescript)**:
Navigate to `/triumph`

```bash
cd triumph/
npm install 
npm start
```

- Use the steps from `How to Commit` guide 
- Read `triumph/README.md` for more information and fixes for known development issues.

### Backend **(firebase)**: 
The backend will be managed by [@listentothefrog](https://github.com/listentothefrog) for the MVP. In the future we will migrate the backend to PostgreSQL and the code will be available.
> **NOTE**: The libraries might change, I am still doing my reasearch and will be adding more to the list. 

## Issues
> **NOTE**: If your bug is a **security vulnerability**, please instead see the [security policy](https://github.com/listentothefrog/captaincook/security/policy)

We use GitHub issues to track public bugs. Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue. Report a bug by <a href="https://github.com/listentothefrog/captaincook/issues">opening a new issue</a>.

## Feature Request
Great Feature Requests tend to have:

- A quick idea summary.
- What & why you wanted to add the specific feature.
- Additional context like images, links to resources to implement the feature etc, etc.

## License
By contributing to this repository, you agree that your contributions will be licensed
under the [LICENSE file](LICENSE).
