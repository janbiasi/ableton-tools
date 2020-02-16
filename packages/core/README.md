# Ableton Tools – Core

This package contains the basic tooling for all Ableton Tools, from managing projects,
aggregating live sets to saving and restoring backups.


## Installation

```bash
npm install --save @ableton-tools/core
```

## Usage

### Project Manager

The project manager can be used to work with active user projects in various ways.
If you create a new instance of the Project manager it's important to always call the `init` method first, which ensures all databases and co. exist.

```ts
const projectManager = new ProjectManager();
await projectManager.init();

// your stuff
```

#### save

To save a certain project (which is required for further work) you can use the save method.

> Note: this will create an `ableton-tools.meta.json` file in your project, please do not delete this if you want to eg. use methods like `getByPath` later on.

```ts
await projectManager.save({
    path: '/path/to/project',
    name: 'Optional Name' // would be "project" if not present
});
```

#### backup

To backup a certain project you can use the backup method. It will automatically
increment the version plus adds an additional comment. This method requires either 
an `IProjectSchema` object (retrieved via any `get` method) or an ID.

```ts
// via identifier
await projectManager.backup('ef8102axc9123jsdf981');

// via project schema
const myProject = projectManager.getByName('Project Name');
await projectManager.backup(myProject, 'This version contains ...');
```

#### restore

Restore a certain version of a project backup to a defined folder. If you don't pass a version the ProjectManager will pick the latest for you.

```ts
// restore latest project ID to "Restored Project"
await projectManager.restore('ef8102axc9123jsdf981', './Restored Project');

// restore version 6 of "Project Name"
const myProject = projectManager.getByName('Project Name');
await projectManager.restore(myProject, './path/to/Restored Project Name', 6);
```

#### getById

Resolve a project by its unique ID

#### getByPath

Resolve the project infomration by path (using the corresponding meta file inside the project)

#### getByName

Resolve the project by it's name. If multiple matches are available it will pick the first one.

#### getBackupsByRef

Get all backups by the project reference (aka ID).
