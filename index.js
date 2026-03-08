require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000 

const githubData = {
  "login": "Vanshajrawat",
  "id": 97528376,
  "node_id": "U_kgDOBdAqOA",
  "avatar_url": "https://avatars.githubusercontent.com/u/97528376?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Vanshajrawat",
  "html_url": "https://github.com/Vanshajrawat",
  "followers_url": "https://api.github.com/users/Vanshajrawat/followers",
  "following_url": "https://api.github.com/users/Vanshajrawat/following{/other_user}",
  "gists_url": "https://api.github.com/users/Vanshajrawat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Vanshajrawat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Vanshajrawat/subscriptions",
  "organizations_url": "https://api.github.com/users/Vanshajrawat/orgs",
  "repos_url": "https://api.github.com/users/Vanshajrawat/repos",
  "events_url": "https://api.github.com/users/Vanshajrawat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Vanshajrawat/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vanshaj Rawat",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 1,
  "following": 7,
  "created_at": "2022-01-11T13:27:07Z",
  "updated_at": "2026-02-03T06:38:10Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
	res.send('virgildotcom')
})

app.get('/login', (req, res) => {
	res.send('<h1>please login at music aur code</h1>')
})

app.get('/youtube', (req, res) => {
	res.send("<h2>Music aur code</h2>")
})

app.get('/github', (req, res) => {
	res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})