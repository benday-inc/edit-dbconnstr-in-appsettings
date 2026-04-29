![build-test](https://github.com/benday-inc/edit-dbconnstr-in-appsettings/workflows/build-test/badge.svg)

# Edit a .net core connection string in appsettings.json

Written by Benjamin Day  
Pluralsight Author | Microsoft MVP | Scrum.org Professional Scrum Trainer  
https://www.benday.com  
https://www.honestcheetah.com  
info@benday.com  
YouTube: https://www.youtube.com/@_benday  

*Got ideas for GitHub Actions you'd like to see? Found a bug? Let us know by submitting an issue https://github.com/benday-inc/edit-dbconnstr-in-appsettings/issues. Want to contribute? Submit a pull request.*

This action helps you to edit the connection strings in your appsettings.json file. 

## What's new in v2

- Action now runs on **Node 24** (was Node 20). Self-hosted runners must have Node 24 available; GitHub-hosted runners are unaffected.
- Modernized dependencies: `@actions/core` 2.x, `jest` 30, `prettier` 3, `eslint` 9 (flat config), `@typescript-eslint` 8.
- 0 npm vulnerabilities.

**Migration:** consumers should switch from `uses: benday-inc/edit-dbconnstr-in-appsettings@v1` to `@v2`.

## Usage

To edit a connection string inside of an appsettings.json file:  
```yaml
- name: edit connection string
  uses: benday-inc/edit-dbconnstr-in-appsettings@v2
  with:
    pathtosettingsfile: '${{ github.workspace }}/Benday.Demo123/src/Benday.Demo123.WebUi/appsettings.json'
    name: "default"
    connectionstring: "Server=(local); Database=demo123; Trusted_Connection=True;"
```

----
## Action Spec:

### Environment variables
- None

### Inputs
- `pathtosettingsfile` - Path to the appsettings.json file
- `name` - Name of the connection string
- `connectionstring` - Value for the connection string

### Outputs
- None
