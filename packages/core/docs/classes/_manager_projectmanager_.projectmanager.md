[@ableton-tools/core](../README.md) › [Globals](../globals.md) › ["manager/ProjectManager"](../modules/_manager_projectmanager_.md) › [ProjectManager](_manager_projectmanager_.projectmanager.md)

# Class: ProjectManager

## Hierarchy

* [Manager](_manager_manager_.manager.md)

  ↳ **ProjectManager**

## Index

### Constructors

* [constructor](_manager_projectmanager_.projectmanager.md#constructor)

### Properties

* [backups](_manager_projectmanager_.projectmanager.md#private-backups)
* [events](_manager_projectmanager_.projectmanager.md#events)
* [name](_manager_projectmanager_.projectmanager.md#name)
* [prepared](_manager_projectmanager_.projectmanager.md#prepared)
* [registry](_manager_projectmanager_.projectmanager.md#private-registry)
* [root](_manager_projectmanager_.projectmanager.md#protected-root)

### Accessors

* [backupsPath](_manager_projectmanager_.projectmanager.md#private-backupspath)

### Methods

* [backup](_manager_projectmanager_.projectmanager.md#backup)
* [ensureFolder](_manager_projectmanager_.projectmanager.md#protected-ensurefolder)
* [fileExists](_manager_projectmanager_.projectmanager.md#protected-fileexists)
* [folderExists](_manager_projectmanager_.projectmanager.md#protected-folderexists)
* [getBackupsByRef](_manager_projectmanager_.projectmanager.md#getbackupsbyref)
* [getById](_manager_projectmanager_.projectmanager.md#getbyid)
* [getByName](_manager_projectmanager_.projectmanager.md#getbyname)
* [getByPath](_manager_projectmanager_.projectmanager.md#getbypath)
* [init](_manager_projectmanager_.projectmanager.md#init)
* [prepare](_manager_projectmanager_.projectmanager.md#protected-prepare)
* [readFile](_manager_projectmanager_.projectmanager.md#protected-readfile)
* [reset](_manager_projectmanager_.projectmanager.md#reset)
* [restore](_manager_projectmanager_.projectmanager.md#restore)
* [save](_manager_projectmanager_.projectmanager.md#save)
* [syncFromDatabase](_manager_projectmanager_.projectmanager.md#syncfromdatabase)
* [syncToDatabase](_manager_projectmanager_.projectmanager.md#synctodatabase)
* [toString](_manager_projectmanager_.projectmanager.md#tostring)
* [writeFile](_manager_projectmanager_.projectmanager.md#protected-writefile)

## Constructors

###  constructor

\+ **new ProjectManager**(`root`: string): *[ProjectManager](_manager_projectmanager_.projectmanager.md)*

*Overrides [Manager](_manager_manager_.manager.md).[constructor](_manager_manager_.manager.md#constructor)*

*Defined in [src/manager/ProjectManager.ts:14](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`root` | string | "." |

**Returns:** *[ProjectManager](_manager_projectmanager_.projectmanager.md)*

## Properties

### `Private` backups

• **backups**: *[Database](_database_.database.md)‹[IProjectBackupSchema](../interfaces/_schema_project_.iprojectbackupschema.md)›*

*Defined in [src/manager/ProjectManager.ts:14](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L14)*

___

###  events

• **events**: *EventEmitter‹›* = new EventEmitter()

*Inherited from [Manager](_manager_manager_.manager.md).[events](_manager_manager_.manager.md#events)*

*Defined in [src/manager/Manager.ts:15](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L15)*

___

###  name

• **name**: *string*

*Inherited from [Manager](_manager_manager_.manager.md).[name](_manager_manager_.manager.md#name)*

*Defined in [src/manager/Manager.ts:24](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L24)*

___

###  prepared

• **prepared**: *boolean* = false

*Inherited from [Manager](_manager_manager_.manager.md).[prepared](_manager_manager_.manager.md#prepared)*

*Defined in [src/manager/Manager.ts:14](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L14)*

___

### `Private` registry

• **registry**: *[Database](_database_.database.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)›*

*Defined in [src/manager/ProjectManager.ts:13](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L13)*

___

### `Protected` root

• **root**: *string*

*Inherited from [Manager](_manager_manager_.manager.md).[root](_manager_manager_.manager.md#protected-root)*

*Defined in [src/manager/Manager.ts:17](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L17)*

## Accessors

### `Private` backupsPath

• **get backupsPath**(): *string*

*Defined in [src/manager/ProjectManager.ts:183](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L183)*

**Returns:** *string*

## Methods

###  backup

▸ **backup**(`projectOrId`: string | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)›): *Promise‹object›*

*Defined in [src/manager/ProjectManager.ts:86](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`projectOrId` | string &#124; [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)› |

**Returns:** *Promise‹object›*

___

### `Protected` ensureFolder

▸ **ensureFolder**(`path`: string): *Promise‹void›*

*Inherited from [Manager](_manager_manager_.manager.md).[ensureFolder](_manager_manager_.manager.md#protected-ensurefolder)*

*Defined in [src/manager/Manager.ts:52](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L52)*

Ensure that a certain subfolder exists for the current manager

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹void›*

___

### `Protected` fileExists

▸ **fileExists**(`name`: string): *Promise‹boolean›*

*Inherited from [Manager](_manager_manager_.manager.md).[fileExists](_manager_manager_.manager.md#protected-fileexists)*

*Defined in [src/manager/Manager.ts:77](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L77)*

Check if a file exists in the current manager space

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹boolean›*

___

### `Protected` folderExists

▸ **folderExists**(`name`: string): *Promise‹boolean›*

*Inherited from [Manager](_manager_manager_.manager.md).[folderExists](_manager_manager_.manager.md#protected-folderexists)*

*Defined in [src/manager/Manager.ts:85](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L85)*

Check if a folder exists in the current manager space

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹boolean›*

___

###  getBackupsByRef

▸ **getBackupsByRef**(`projectId`: string): *object*

*Defined in [src/manager/ProjectManager.ts:173](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L173)*

**Parameters:**

Name | Type |
------ | ------ |
`projectId` | string |

**Returns:** *object*

* **backups**: *[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectBackupSchema](../interfaces/_schema_project_.iprojectbackupschema.md)›[]*

* **versions**: *number[]*

___

###  getById

▸ **getById**(`id`: string): *undefined | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)›*

*Defined in [src/manager/ProjectManager.ts:151](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *undefined | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)›*

___

###  getByName

▸ **getByName**(`name`: string): *undefined | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)›*

*Defined in [src/manager/ProjectManager.ts:147](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *undefined | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)›*

___

###  getByPath

▸ **getByPath**(`path`: string): *Promise‹[IProjectMetaSchema](../interfaces/_schema_project_.iprojectmetaschema.md)›*

*Defined in [src/manager/ProjectManager.ts:155](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹[IProjectMetaSchema](../interfaces/_schema_project_.iprojectmetaschema.md)›*

___

###  init

▸ **init**(): *Promise‹void›*

*Overrides [Manager](_manager_manager_.manager.md).[init](_manager_manager_.manager.md#abstract-init)*

*Defined in [src/manager/ProjectManager.ts:32](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L32)*

**Returns:** *Promise‹void›*

___

### `Protected` prepare

▸ **prepare**(): *Promise‹void›*

*Inherited from [Manager](_manager_manager_.manager.md).[prepare](_manager_manager_.manager.md#protected-prepare)*

*Defined in [src/manager/Manager.ts:44](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L44)*

Function for initialization, ensures the base folder and connections

**Returns:** *Promise‹void›*

___

### `Protected` readFile

▸ **readFile**<**T**>(`name`: string): *Promise‹T›*

*Inherited from [Manager](_manager_manager_.manager.md).[readFile](_manager_manager_.manager.md#protected-readfile)*

*Defined in [src/manager/Manager.ts:68](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L68)*

Read a file from the current manager space

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹T›*

___

###  reset

▸ **reset**(): *Promise‹void›*

*Defined in [src/manager/ProjectManager.ts:54](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L54)*

**Returns:** *Promise‹void›*

___

###  restore

▸ **restore**(`projectOrId`: string | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)›, `target`: string, `version?`: undefined | number): *Promise‹object›*

*Defined in [src/manager/ProjectManager.ts:121](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`projectOrId` | string &#124; [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)› |
`target` | string |
`version?` | undefined &#124; number |

**Returns:** *Promise‹object›*

___

###  save

▸ **save**(`project`: Pick‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md), "name" | "path"›): *Promise‹[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)››*

*Defined in [src/manager/ProjectManager.ts:59](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`project` | Pick‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md), "name" &#124; "path"› |

**Returns:** *Promise‹[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)››*

___

###  syncFromDatabase

▸ **syncFromDatabase**(): *Promise‹void›*

*Defined in [src/manager/ProjectManager.ts:49](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L49)*

**Returns:** *Promise‹void›*

___

###  syncToDatabase

▸ **syncToDatabase**(): *Promise‹void›*

*Defined in [src/manager/ProjectManager.ts:44](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/ProjectManager.ts#L44)*

**Returns:** *Promise‹void›*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Manager](_manager_manager_.manager.md).[toString](_manager_manager_.manager.md#tostring)*

*Defined in [src/manager/Manager.ts:31](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L31)*

Generates a human readable name for the current manager

**Returns:** *string*

___

### `Protected` writeFile

▸ **writeFile**(`name`: string, `content`: object): *Promise‹void›*

*Inherited from [Manager](_manager_manager_.manager.md).[writeFile](_manager_manager_.manager.md#protected-writefile)*

*Defined in [src/manager/Manager.ts:60](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L60)*

Write a file to the current manager space

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`content` | object |

**Returns:** *Promise‹void›*
