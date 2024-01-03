<a href="https://github.com/squarestack"><img src="https://github.com/squarestack/github-invite/assets/49127376/9d7b844a-987d-4934-88ff-35e2d312ef3a" align="left" style="float: left; margin: 0 10px 0 0; width: 150px; height: 150px;"></a>

# SquareStack - Invite

> Join our organization in a few clicks

[![GitHub License](https://img.shields.io/github/license/squarestack/github-invite?color=%2334D058&logo=github&style=flat-square&label=License)](https://github.com/squarestack/github-invite/blob/main/license)

---

## 🔩 Usage

1. Clone the repository (`git clone https://github.com/squarestack/github-invite.git`)
2. Install dependencies with `pnpm i` or `npm i`
3. Create Github Personal Access Token with `admin:org` scope (see [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token))
4. Copy `.env.example` to `.env` and fill it with your data (see [`.env` file](#-env-file) section)
5. Run `pnpm run deploy` to deploy the app or `pnpm run dev` to run it locally

## 🗜️ `.env` file

```
ORGANIZATION = "GITHUB_ORG" # Organization name
GITHUB_TOKEN = "GITHUB_PAT" # Personal Access Token
TEAM_ID = "GITHUB_TEAM_ID" # optional
```

> [!NOTE]
> You can get your team id by going to `https://api.github.com/orgs/{ORGANIZATION}/teams` and finding your team (requires authentication), read more [here](https://docs.github.com/en/rest/reference/teams#list-teams)

## ⁉️ Issues

If you have any issues with the page please create [new issue here](https://github.com/squarestack/github-invite/issues)

## 📥 Pull Requests

When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/squarestack/github-invite/pulls) on [GitHub](https://github.com) and describe the feature or fix.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/squarestack/github-invite/blob/main/license) file for details

## 📃 License

This project is licensed under the MIT License - see the [LICENSE](license.md) file for details
