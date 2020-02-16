[@ableton-tools/core](../README.md) › [Globals](../globals.md) › ["errors/ProjectNotFoundError"](../modules/_errors_projectnotfounderror_.md) › [ProjectNotFoundError](_errors_projectnotfounderror_.projectnotfounderror.md)

# Class: ProjectNotFoundError

## Hierarchy

  ↳ [AbletonToolsError](_errors_error_.abletontoolserror.md)

  ↳ **ProjectNotFoundError**

## Index

### Constructors

* [constructor](_errors_projectnotfounderror_.projectnotfounderror.md#constructor)

### Properties

* [message](_errors_projectnotfounderror_.projectnotfounderror.md#message)
* [name](_errors_projectnotfounderror_.projectnotfounderror.md#name)
* [stack](_errors_projectnotfounderror_.projectnotfounderror.md#optional-stack)

### Methods

* [fromBackup](_errors_projectnotfounderror_.projectnotfounderror.md#static-frombackup)

## Constructors

###  constructor

\+ **new ProjectNotFoundError**(`projectOrId`: string | [IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)): *[ProjectNotFoundError](_errors_projectnotfounderror_.projectnotfounderror.md)*

*Overrides [AbletonToolsError](_errors_error_.abletontoolserror.md).[constructor](_errors_error_.abletontoolserror.md#constructor)*

*Defined in [src/errors/ProjectNotFoundError.ts:8](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/errors/ProjectNotFoundError.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`projectOrId` | string &#124; [IProjectSchema](../interfaces/_schema_project_.iprojectschema.md) |

**Returns:** *[ProjectNotFoundError](_errors_projectnotfounderror_.projectnotfounderror.md)*

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

### `Static` fromBackup

▸ **fromBackup**(`projectOrId`: string | [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)›): *[ProjectNotFoundError](_errors_projectnotfounderror_.projectnotfounderror.md)‹›*

*Defined in [src/errors/ProjectNotFoundError.ts:6](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/errors/ProjectNotFoundError.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`projectOrId` | string &#124; [IDatabaseEntry](../interfaces/_database_.idatabaseentry.md)‹[IProjectSchema](../interfaces/_schema_project_.iprojectschema.md)› |

**Returns:** *[ProjectNotFoundError](_errors_projectnotfounderror_.projectnotfounderror.md)‹›*
