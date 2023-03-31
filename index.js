import { Octokit } from "@octokit/core";
import { config } from "./config.js";

const octokit = new Octokit({
  auth: config.github_pat
});

let phrase = 'action:git.push';

let logs = await octokit.request('GET /orgs/{org}/audit-log', {
    org: config.org,
    include: 'git',
    per_page: 100,
    phrase,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

let events = logs.data;

console.log(events[0]);
console.log(`${events.length} events found matching "${phrase}".`);
