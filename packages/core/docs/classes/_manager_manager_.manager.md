[@ableton-tools/core](../README.md) › [Globals](../globals.md) › ["manager/Manager"](../modules/_manager_manager_.md) › [Manager](_manager_manager_.manager.md)

# Class: Manager

Abstract manager class to provide basic managing functionality
for example saving global configurations, template lists etc.

## Hierarchy

* **Manager**

  ↳ [TemplateManager](_manager_templatemanager_.templatemanager.md)

  ↳ [ProjectManager](_manager_projectmanager_.projectmanager.md)

## Index

### Constructors

* [constructor](_manager_manager_.manager.md#constructor)

### Properties

* [events](_manager_manager_.manager.md#events)
* [name](_manager_manager_.manager.md#name)
* [prepared](_manager_manager_.manager.md#prepared)
* [root](_manager_manager_.manager.md#protected-root)

### Methods

* [ensureFolder](_manager_manager_.manager.md#protected-ensurefolder)
* [fileExists](_manager_manager_.manager.md#protected-fileexists)
* [folderExists](_manager_manager_.manager.md#protected-folderexists)
* [init](_manager_manager_.manager.md#abstract-init)
* [prepare](_manager_manager_.manager.md#protected-prepare)
* [readFile](_manager_manager_.manager.md#protected-readfile)
* [toString](_manager_manager_.manager.md#tostring)
* [writeFile](_manager_manager_.manager.md#protected-writefile)

## Constructors

###  constructor

\+ **new Manager**(`name`: string, `globalRoot`: string): *[Manager](_manager_manager_.manager.md)*

*Defined in [src/manager/Manager.ts:17](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L17)*

Creates a new manager with a name (base folder) and a possible
override option for the global root, eg. if you want to save
all your data in a different root directory than the $HOME folder.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`globalRoot` | string | ABLETON_TOOLS_ROOT |

**Returns:** *[Manager](_manager_manager_.manager.md)*

## Properties

###  events

• **events**: *EventEmitter‹›* = new EventEmitter()

*Defined in [src/manager/Manager.ts:15](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L15)*

___

###  name

• **name**: *string*

*Defined in [src/manager/Manager.ts:24](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L24)*

___

###  prepared

• **prepared**: *boolean* = false

*Defined in [src/manager/Manager.ts:14](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L14)*

___

### `Protected` root

• **root**: *string*

*Defined in [src/manager/Manager.ts:17](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L17)*

## Methods

### `Protected` ensureFolder

▸ **ensureFolder**(`path`: string): *Promise‹void›*

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

*Defined in [src/manager/Manager.ts:85](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L85)*

Check if a folder exists in the current manager space

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹boolean›*

___

### `Abstract` init

▸ **init**(): *Promise‹void›*

*Defined in [src/manager/Manager.ts:39](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L39)*

Every manager needs to implement an init method,
you're required to first call "this.prepare()"!

**Returns:** *Promise‹void›*

___

### `Protected` prepare

▸ **prepare**(): *Promise‹void›*

*Defined in [src/manager/Manager.ts:44](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L44)*

Function for initialization, ensures the base folder and connections

**Returns:** *Promise‹void›*

___

### `Protected` readFile

▸ **readFile**<**T**>(`name`: string): *Promise‹T›*

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

###  toString

▸ **toString**(): *string*

*Defined in [src/manager/Manager.ts:31](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L31)*

Generates a human readable name for the current manager

**Returns:** *string*

___

### `Protected` writeFile

▸ **writeFile**(`name`: string, `content`: object): *Promise‹void›*

*Defined in [src/manager/Manager.ts:60](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/manager/Manager.ts#L60)*

Write a file to the current manager space

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`content` | object |

**Returns:** *Promise‹void›*
