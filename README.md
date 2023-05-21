# ALM CI/CD

## Testing pipeline demonstration

Prevents merging pull requests when tests fail or coverage quota is not met.

[Pull Request #15](https://github.com/tsorak/webb22_alm_cicd/pull/15)

[A Specific Workflow Run](https://github.com/tsorak/webb22_alm_cicd/actions/runs/5037478637/jobs/9034338546)

## Workflows

### Requirement 4

Not needed as test coverage is a built in feature in Jest.

### Requirement 9

Requirement 9 is solved by [tagging](https://github.com/tsorak/webb22_alm_cicd/blob/c294dd1f143a35e49ef00e2b59af651a277c583d/.github/workflows/build.yml#LL34C41-L34C41) built images with their branch-name.

The image can be pulled using `ghcr.io/tsorak/webb22-alm-cicd:BRANCH-NAME`

[Example](https://github.com/tsorak/webb22_alm_cicd/blob/c294dd1f143a35e49ef00e2b59af651a277c583d/.github/workflows/fake-deploy.yml#L39)

## Contributing

All contributions must pass through a pull request.

### Local setup

All commits must follow the conventional commitlint config.

Setting up commitlint locally is recommended.

Husky utilises git hooks and runs commitlint for us when commiting.

```sh
npm install
npx husky install
```

You are now all ready to go!
