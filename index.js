import { Octokit } from "@octokit/core";
import { keys } from "./secrets.js";

const octokit = new Octokit({
  auth: keys.github_pat
});

let logs = await octokit.request('GET /orgs/{org}/audit-log', {
    org: 'customer-success-architects',
    include: 'git',
    per_page: 100,
    phrase: 'action:git.push',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

let events = logs.data;

console.log(events[0]);

console.log(events.length);



// let pushes = logs.data.filter(log => log.action === 'git.push');

// console.log(pushes);

// export { orgLogs };