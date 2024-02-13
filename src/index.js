// @ts-check

const core = require('@actions/core')
const debug = require('debug')('trigger-gh-workflow')

const org = core.getInput('organization', { required: true })
const repo = core.getInput('repository', { required: true })

if (!org) {
  throw new Error('Organization is required')
}
if (!repo) {
  throw new Error('Repository is required')
}

const url = `https://api.github.com/repos/${org}/${repo}/dispatches`
debug('url:', url)

const eventType = core.getInput('event-type', { required: true })
if (!eventType) {
  throw new Error('Event type is required')
}

if (!process.env.GH_TOKEN) {
  throw new Error('GH_TOKEN is required')
}

const payload = core.getInput('payload', { required: true })
debug('parsing client payload JSON')
const clientPayload = JSON.parse(payload)
const body = {
  event_type: eventType,
  client_payload: clientPayload,
}
debug('body:', body)

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.GH_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
  body: JSON.stringify(body),
}

fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.error('Error:', error)
    process.exit(1)
  })
