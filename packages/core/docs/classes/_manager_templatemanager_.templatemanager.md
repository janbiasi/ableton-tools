[@ableton-tools/core](../README.md) › [Globals](../globals.md) › ["manager/TemplateManager"](../modules/_manager_templatemanager_.md) › [TemplateManager](_manager_templatemanager_.templatemanager.md)

# Class: TemplateManager

## Hierarchy

* [Manager](_manager_manager_.manager.md)

  ↳ **TemplateManager**

## Index

### Constructors

* [constructor](_manager_templatemanager_.templatemanager.md#constructor)

### Properties

* [database](_manager_templatemanager_.templatemanager.md#private-database)
* [events](_manager_templatemanager_.templatemanager.md#events)
* [name](_manager_templatemanager_.templatemanager.md#name)
* [prepared](_manager_templatemanager_.templatemanager.md#prepared)
* [root](_manager_templatemanager_.templatemanager.md#protected-root)

### Methods

* [ensureFolder](_manager_templatemanager_.templatemanager.md#protected-ensurefolder)
* [fileExists](_manager_templatemanager_.templatemanager.md#protected-fileexists)
* [folderExists](_manager_templatemanager_.templatemanager.md#protected-folderexists)
* [get](_manager_templatemanager_.templatemanager.md#get)
* [init](_manager_templatemanager_.templatemanager.md#init)
* [prepare](_manager_templatemanager_.templatemanager.md#protected-prepare)
* [readFile](_manager_templatemanager_.templatemanager.md#protected-readfile)
* [save](_manager_templatemanager_.templatemanager.md#save)
* [syncFromDatabase](_manager_templatemanager_.templatemanager.md#syncfromdatabase)
* [syncToDatabase](_manager_templatemanager_.templatemanager.md#synctodatabase)
* [toString](_manager_templatemanager_.templatemanager.md#tostring)
* [writeFile](_manager_templatemanager_.templatemanager.md#protected-writefile)

## Constructors

###  constructor

\+ **new TemplateManager**(`root`: string): *[TemplateManager](_manager_templatemanager_.templatemanager.md)*

*Overrides [Manager](_manager_manager_.manager.md).[constructor](_manager_manager_.manager.md#constructor)*

*Defined in [src/manager/TemplateManager.ts:6](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/TemplateManager.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`root` | string | "." |

**Returns:** *[TemplateManager](_manager_templatemanager_.templatemanager.md)*

## Properties

### `Private` database

• **database**: *[Database](_database_.database.md)‹[ITemplateSchema](../interfaces/_schema_template_.itemplateschema.md)›*

*Defined in [src/manager/TemplateManager.ts:6](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/TemplateManager.ts#L6)*

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

### `Protected` root

• **root**: *string*

*Inherited from [Manager](_manager_manager_.manager.md).[root](_manager_manager_.manager.md#protected-root)*

*Defined in [src/manager/Manager.ts:17](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L17)*

## Methods

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

###  get

▸ **get**(`name`: string): *undefined | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[ITemplateSchema](../interfaces/_schema_template_.itemplateschema.md)›*

*Defined in [src/manager/TemplateManager.ts:46](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/TemplateManager.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *undefined | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[ITemplateSchema](../interfaces/_schema_template_.itemplateschema.md)›*

___

###  init

▸ **init**(): *Promise‹void›*

*Overrides [Manager](_manager_manager_.manager.md).[init](_manager_manager_.manager.md#abstract-init)*

*Defined in [src/manager/TemplateManager.ts:18](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/TemplateManager.ts#L18)*

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

###  save

▸ **save**(`name`: string, `path`: string): *Promise‹void›*

*Defined in [src/manager/TemplateManager.ts:37](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/TemplateManager.ts#L37)*

TODO: Refactor to use the ITemplateSchema as parameter instead of multi params

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`path` | string |

**Returns:** *Promise‹void›*

___

###  syncFromDatabase

▸ **syncFromDatabase**(): *Promise‹void›*

*Defined in [src/manager/TemplateManager.ts:30](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/TemplateManager.ts#L30)*

**Returns:** *Promise‹void›*

___

###  syncToDatabase

▸ **syncToDatabase**(): *Promise‹void›*

*Defined in [src/manager/TemplateManager.ts:26](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/TemplateManager.ts#L26)*

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
