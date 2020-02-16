[@ableton-tools/core](../README.md) › [Globals](../globals.md) › ["errors/BackupRestorationError"](../modules/_errors_backuprestorationerror_.md) › [BackupRestorationError](_errors_backuprestorationerror_.backuprestorationerror.md)

# Class: BackupRestorationError

## Hierarchy

  ↳ [AbletonToolsError](_errors_error_.abletontoolserror.md)

  ↳ **BackupRestorationError**

## Index

### Constructors

* [constructor](_errors_backuprestorationerror_.backuprestorationerror.md#constructor)

### Properties

* [message](_errors_backuprestorationerror_.backuprestorationerror.md#message)
* [name](_errors_backuprestorationerror_.backuprestorationerror.md#name)
* [stack](_errors_backuprestorationerror_.backuprestorationerror.md#optional-stack)

### Methods

* [invalidVersion](_errors_backuprestorationerror_.backuprestorationerror.md#static-invalidversion)
* [notFound](_errors_backuprestorationerror_.backuprestorationerror.md#static-notfound)

## Constructors

###  constructor

\+ **new BackupRestorationError**(`message`: string): *[BackupRestorationError](_errors_backuprestorationerror_.backuprestorationerror.md)*

*Overrides [AbletonToolsError](_errors_error_.abletontoolserror.md).[constructor](_errors_error_.abletontoolserror.md#constructor)*

*Defined in [src/errors/BackupRestorationError.ts:8](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/errors/BackupRestorationError.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *[BackupRestorationError](_errors_backuprestorationerror_.backuprestorationerror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [AbletonToolsError](_errors_error_.abletontoolserror.md).[message](_errors_error_.abletontoolserror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string* = "AbletonToolsError"

*Inherited from [AbletonToolsError](_errors_error_.abletontoolserror.md).[name](_errors_error_.abletontoolserror.md#name)*

*Overrides void*

*Defined in [src/errors/Error.ts:21](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/errors/Error.ts#L21)*

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [AbletonToolsError](_errors_error_.abletontoolserror.md).[stack](_errors_error_.abletontoolserror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

## Methods

### `Static` invalidVersion

▸ **invalidVersion**(`version`: number, `versions`: string | number[]): *[BackupRestorationError](_errors_backuprestorationerror_.backuprestorationerror.md)‹›*

*Defined in [src/errors/BackupRestorationError.ts:4](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/errors/BackupRestorationError.ts#L4)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`version` | number | - |
`versions` | string &#124; number[] | ['none'] |

**Returns:** *[BackupRestorationError](_errors_backuprestorationerror_.backuprestorationerror.md)‹›*

___

### `Static` notFound

▸ **notFound**(): *void*

*Defined in [src/errors/BackupRestorationError.ts:8](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/errors/BackupRestorationError.ts#L8)*

**Returns:** *void*
