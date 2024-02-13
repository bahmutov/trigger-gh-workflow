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

const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN
if (!token) {
  throw new Error('GH_TOKEN or GITHUB_TOKEN is required')
}

const payload = core.getInput('payload', { required: true })
debug('parsing client JSON payload after removing newlines')
const clientPayload = JSON.parse(payload.replace(/\n/g, ''))
const body = JSON.stringify({
  event_type: eventType,
  client_payload: clientPayload,
})
debug('body: %s', body)

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
  body,
}

fetch(url, options)
  // there is no response data for this endpoint
  // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#create-a-repository-dispatch-event
  .then((response) => {
    if (response.status !== 204) {
      throw new Error(`Failed to trigger workflow ${eventType} ${url}`)
    }
  })
  .catch((error) => {
    console.error('Error:', error)
    process.exit(1)
  })
