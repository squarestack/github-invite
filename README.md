<a href="https://github.com/just-that"><img src="https://user-images.githubusercontent.com/49127376/236443685-175baf83-ac5b-4952-98d2-ff94a538d50d.png" align="left" style="float: left; margin: 0 10px 0 0; width: 150px; height: 150px;"></a>

# Just.it - Invite

> Join our organization in a few clicks

[![GitHub License](https://img.shields.io/github/license/just-that/invite?color=%2334D058&logo=github&style=flat-square&label=License)](https://github.com/just-that/invite/blob/main/license)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/just-that/invite?color=%2334D058&logo=github&style=flat-square&label=Vulnerabilities)](https://github.com/just-that/invite)

---

## 🔩 Usage

1. Clone the repository (`git clone https://github.com/just-that/invite.git`)
2. Install dependencies with `pnpm i` or `npm i`
3. Create Github Personal Access Token with `admin:org` scope (see [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token))
4. Create `.env` file with the following content (see [`.env` file](#-env-file) section)
5. Run `pnpm run deploy` to deploy the app or `pnpm run dev` to run it locally

## 🗜️ `.env` file

```
ORGANIZATION = "GITHUB_ORG" # Organization name
GITHUB_TOKEN = "GITHUB_PAT" # Personal Access Token
TEAM_ID = "GITHUB_TEAM_ID" # optional
```

## ⁉️ Issues

If you have any issues with the page please create [new issue here](https://github.com/just-that/invite/issues)

## 📥 Pull Requests

When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/just-that/invite/pulls) on [GitHub](https://github.com) and describe the feature or fix.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/just-that/invite/blob/main/license) file for details

## 📃 License

This project is licensed under the MIT License - see the [LICENSE](license.md) file for details
