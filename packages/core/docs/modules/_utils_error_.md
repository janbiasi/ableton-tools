[@ableton-tools/core](../README.md) › [Globals](../globals.md) › ["utils/error"](_utils_error_.md)

# External module: "utils/error"

## Index

### Functions

* [fixProto](_utils_error_.md#fixproto)
* [fixStack](_utils_error_.md#fixstack)

## Functions

###  fixProto

▸ **fixProto**(`target`: [Error](../classes/_errors_error_.abletontoolserror.md#static-error), `prototype`: object): *void*

*Defined in [src/utils/error.ts:9](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/utils/error.ts#L9)*

Fix the prototype chain of the error

Use Object.setPrototypeOf
Support ES6 environments

Fallback setting __proto__

**Parameters:**

Name | Type |
------ | ------ |
`target` | [Error](../classes/_errors_error_.abletontoolserror.md#static-error) |
`prototype` | object |

**Returns:** *void*

___

###  fixStack

▸ **fixStack**(`target`: [Error](../classes/_errors_error_.abletontoolserror.md#static-error), `fn`: Function): *void*

*Defined in [src/utils/error.ts:20](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/utils/error.ts#L20)*

Capture and fix the error stack when available

Use Error.captureStackTrace
Support v8 environments

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`target` | [Error](../classes/_errors_error_.abletontoolserror.md#static-error) | - |
`fn` | Function | target.constructor |

**Returns:** *void*
