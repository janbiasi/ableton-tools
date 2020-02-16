[@ableton-tools/core](../README.md) › [Globals](../globals.md) › ["Database"](../modules/_database_.md) › [Database](_database_.database.md)

# Class: Database <**T**>

## Type parameters

▪ **T**: *object*

## Hierarchy

* **Database**

## Index

### Constructors

* [constructor](_database_.database.md#constructor)

### Properties

* [config](_database_.database.md#private-config)

### Accessors

* [databaseFile](_database_.database.md#private-databasefile)
* [entries](_database_.database.md#entries)
* [root](_database_.database.md#private-root)

### Methods

* [checkDatabaseExists](_database_.database.md#private-checkdatabaseexists)
* [deleteByID](_database_.database.md#deletebyid)
* [deserialize](_database_.database.md#private-deserialize)
* [get](_database_.database.md#get)
* [getById](_database_.database.md#getbyid)
* [getOne](_database_.database.md#getone)
* [init](_database_.database.md#init)
* [reset](_database_.database.md#reset)
* [save](_database_.database.md#save)
* [serialize](_database_.database.md#private-serialize)
* [syncFromDatabase](_database_.database.md#syncfromdatabase)
* [syncToDatabase](_database_.database.md#synctodatabase)
* [toString](_database_.database.md#tostring)

### Object literals

* [contents](_database_.database.md#private-contents)

## Constructors

###  constructor

\+ **new Database**(`config`: [IDatabaseConfig](../interfaces/_database_.idatabaseconfig.md)): *[Database](_database_.database.md)*

*Defined in [src/Database.ts:28](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IDatabaseConfig](../interfaces/_database_.idatabaseconfig.md) |

**Returns:** *[Database](_database_.database.md)*

## Properties

### `Private` config

• **config**: *[IDatabaseConfig](../interfaces/_database_.idatabaseconfig.md)*

*Defined in [src/Database.ts:30](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L30)*

## Accessors

### `Private` databaseFile

• **get databaseFile**(): *string*

*Defined in [src/Database.ts:150](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L150)*

**Returns:** *string*

___

###  entries

• **get entries**(): *ReadonlyArray‹[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T››*

*Defined in [src/Database.ts:46](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L46)*

**Returns:** *ReadonlyArray‹[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T››*

___

### `Private` root

• **get root**(): *string*

*Defined in [src/Database.ts:146](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L146)*

**Returns:** *string*

## Methods

### `Private` checkDatabaseExists

▸ **checkDatabaseExists**(): *Promise‹boolean›*

*Defined in [src/Database.ts:154](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L154)*

**Returns:** *Promise‹boolean›*

___

###  deleteByID

▸ **deleteByID**(`id`: string): *Promise‹false | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T››*

*Defined in [src/Database.ts:74](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹false | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T››*

___

### `Private` deserialize

▸ **deserialize**(`contents`: string): *[IDatabaseContent](../interfaces/_database_.idatabasecontent.md)‹any›*

*Defined in [src/Database.ts:162](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`contents` | string |

**Returns:** *[IDatabaseContent](../interfaces/_database_.idatabasecontent.md)‹any›*

___

###  get

▸ **get**(`lookup`: function): *[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T›[]*

*Defined in [src/Database.ts:98](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L98)*

Generic getter for entries using a custom lookup function

**Parameters:**

▪ **lookup**: *function*

▸ (`entry`: [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T› |

**Returns:** *[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T›[]*

___

###  getById

▸ **getById**(`id`: string): *[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T› | undefined*

*Defined in [src/Database.ts:113](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L113)*

Get an entry by ID

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T› | undefined*

___

###  getOne

▸ **getOne**(`lookup`: function): *[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T› | undefined*

*Defined in [src/Database.ts:105](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L105)*

Generic getter for one entry using a custom lookup function

**Parameters:**

▪ **lookup**: *function*

▸ (`entry`: [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T› |

**Returns:** *[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T› | undefined*

___

###  init

▸ **init**(): *Promise‹void›*

*Defined in [src/Database.ts:32](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L32)*

**Returns:** *Promise‹void›*

___

###  reset

▸ **reset**(): *Promise‹void›*

*Defined in [src/Database.ts:50](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L50)*

**Returns:** *Promise‹void›*

___

###  save

▸ **save**(`entry`: T): *Promise‹[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T››*

*Defined in [src/Database.ts:62](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L62)*

Update or create an entry

**Parameters:**

Name | Type |
------ | ------ |
`entry` | T |

**Returns:** *Promise‹[IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹T››*

___

### `Private` serialize

▸ **serialize**(): *string*

*Defined in [src/Database.ts:158](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L158)*

**Returns:** *string*

___

###  syncFromDatabase

▸ **syncFromDatabase**(): *Promise‹void›*

*Defined in [src/Database.ts:125](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L125)*

**Returns:** *Promise‹void›*

___

###  syncToDatabase

▸ **syncToDatabase**(): *Promise‹void›*

*Defined in [src/Database.ts:117](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L117)*

**Returns:** *Promise‹void›*

___

###  toString

▸ **toString**(): *string*

*Defined in [src/Database.ts:142](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L142)*

**Returns:** *string*

## Object literals

### `Private` contents

### ▪ **contents**: *object*

*Defined in [src/Database.ts:25](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L25)*

###  entries

• **entries**: *never[]* = []

*Defined in [src/Database.ts:27](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L27)*

###  name

• **name**: *string* = "unknown"

*Defined in [src/Database.ts:26](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Database.ts#L26)*
