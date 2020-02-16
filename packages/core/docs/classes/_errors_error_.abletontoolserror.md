[@ableton-tools/core](../README.md) › [Globals](../globals.md) › ["errors/Error"](../modules/_errors_error_.md) › [AbletonToolsError](_errors_error_.abletontoolserror.md)

# Class: AbletonToolsError

Allows to easily extend a base class to create custom applicative errors.

example:
```
class HttpError extends CustomError {
	public constructor(
		public code: number,
		message?: string,
	) {
		super(message)
	}
}

new HttpError(404, 'Not found')
```

## Hierarchy

* [Error](_errors_error_.abletontoolserror.md#static-error)

  ↳ **AbletonToolsError**

  ↳ [BackupRestorationError](_errors_backuprestorationerror_.backuprestorationerror.md)

  ↳ [InvariantViolationError](_errors_invariantviolationerror_.invariantviolationerror.md)

  ↳ [ProjectNotFoundError](_errors_projectnotfounderror_.projectnotfounderror.md)

  ↳ [ProjectMetaNotFoundError](_errors_projectmetanotfounderror_.projectmetanotfounderror.md)

  ↳ [DatabaseError](_errors_databaseerror_.databaseerror.md)

## Index

### Constructors

* [constructor](_errors_error_.abletontoolserror.md#constructor)

### Properties

* [message](_errors_error_.abletontoolserror.md#message)
* [name](_errors_error_.abletontoolserror.md#name)
* [stack](_errors_error_.abletontoolserror.md#optional-stack)
* [Error](_errors_error_.abletontoolserror.md#static-error)

## Constructors

###  constructor

\+ **new AbletonToolsError**(`message?`: undefined | string): *[AbletonToolsError](_errors_error_.abletontoolserror.md)*

*Defined in [src/errors/Error.ts:21](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/errors/Error.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |

**Returns:** *[AbletonToolsError](_errors_error_.abletontoolserror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [AbletonToolsError](_errors_error_.abletontoolserror.md).[message](_errors_error_.abletontoolserror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string* = "AbletonToolsError"

*Overrides void*

*Defined in [src/errors/Error.ts:21](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/errors/Error.ts#L21)*

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [AbletonToolsError](_errors_error_.abletontoolserror.md).[stack](_errors_error_.abletontoolserror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
