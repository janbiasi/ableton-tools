[@ableton-tools/core](../README.md) › [Globals](../globals.md) › ["utils/uuid"](_utils_uuid_.md)

# External module: "utils/uuid"

## Index

### Type aliases

* [UUIDSize](_utils_uuid_.md#uuidsize)

### Functions

* [uuid](_utils_uuid_.md#const-uuid)

## Type aliases

###  UUIDSize

Ƭ **UUIDSize**: *16 | 32 | 64*

*Defined in [src/utils/uuid.ts:3](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/utils/uuid.ts#L3)*

## Functions

### `Const` uuid

▸ **uuid**(`size`: [UUIDSize](_utils_uuid_.md#uuidsize)): *string*

*Defined in [src/utils/uuid.ts:9](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/utils/uuid.ts#L9)*

Generate a unique random ID based on the internal crypto module.
Size is configurable, defaults to 16 as it should be enough for most cases.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`size` | [UUIDSize](_utils_uuid_.md#uuidsize) | 16 |

**Returns:** *string*
