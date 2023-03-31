# Querying GitHub Audit Logs via REST API

Based on [the REST API docs](https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#searching-the-audit-log).

To access audit logs through the REST API, **your organization must be registered within an enterprise**.

1. Create a fine-grained Personal Access Token (PAT) with the organization-level permission `Administration: Read-only`.

2. Copy `config.js.example` to create a config file, and update it to include your PAT.

```
cp ./config.js.example ./config.js
```

3. Install JS dependencies

```
npm i
```

4. Run the script

```
node index
```

5. Experiment with [filtering expressions](https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#searching-the-audit-log) in the API call to change your search parameters