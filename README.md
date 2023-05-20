# ALM CI/CD

## Workflows

Testing pipeline demonstration: [PR #8](https://github.com/tsorak/webb22_alm_cicd/pull/8)

### Requirement 4

Not needed as test coverage is a built in feature in Jest.

### Requirement 9

Requirement 9 is solved by [tagging](https://github.com/tsorak/webb22_alm_cicd/blob/c294dd1f143a35e49ef00e2b59af651a277c583d/.github/workflows/build.yml#LL34C41-L34C41) built images with their branch-name.

The image can be pulled using `ghcr.io/tsorak/webb22-alm-cicd:BRANCH-NAME`

[Example](https://github.com/tsorak/webb22_alm_cicd/blob/c294dd1f143a35e49ef00e2b59af651a277c583d/.github/workflows/fake-deploy.yml#L39)

LUL
