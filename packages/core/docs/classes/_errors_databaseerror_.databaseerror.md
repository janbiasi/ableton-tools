[@ableton-tools/core](../README.md) › [Globals](../globals.md) › ["errors/DatabaseError"](../modules/_errors_databaseerror_.md) › [DatabaseError](_errors_databaseerror_.databaseerror.md)

# Class: DatabaseError

## Hierarchy

  ↳ [AbletonToolsError](_errors_error_.abletontoolserror.md)

  ↳ **DatabaseError**

## Index

### Constructors

* [constructor](_errors_databaseerror_.databaseerror.md#constructor)

### Properties

* [message](_errors_databaseerror_.databaseerror.md#message)
* [name](_errors_databaseerror_.databaseerror.md#name)
* [stack](_errors_databaseerror_.databaseerror.md#optional-stack)

## Constructors

###  constructor

\+ **new DatabaseError**(`name`: string, `message`: string): *[DatabaseError](_errors_databaseerror_.databaseerror.md)*

*Overrides [AbletonToolsError](_errors_error_.abletontoolserror.md).[constructor](_errors_error_.abletontoolserror.md#constructor)*

*Defined in [src/errors/DatabaseError.ts:3](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/errors/DatabaseError.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`message` | string |

**Returns:** *[DatabaseError](_errors_databaseerror_.databaseerror.md)*

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
