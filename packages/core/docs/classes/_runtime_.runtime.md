[@ableton-tools/core](../README.md) › [Globals](../globals.md) › ["Runtime"](../modules/_runtime_.md) › [Runtime](_runtime_.runtime.md)

# Class: Runtime

## Hierarchy

* **Runtime**

## Index

### Constructors

* [constructor](_runtime_.runtime.md#constructor)

### Properties

* [config](_runtime_.runtime.md#config)
* [projects](_runtime_.runtime.md#projects)
* [templates](_runtime_.runtime.md#templates)

### Methods

* [bootstrap](_runtime_.runtime.md#bootstrap)

## Constructors

###  constructor

\+ **new Runtime**(`config`: Partial‹[IRuntimeConfig](../interfaces/_runtime_.iruntimeconfig.md)›): *[Runtime](_runtime_.runtime.md)*

*Defined in [src/Runtime.ts:19](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Runtime.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | Partial‹[IRuntimeConfig](../interfaces/_runtime_.iruntimeconfig.md)› | {} |

**Returns:** *[Runtime](_runtime_.runtime.md)*

## Properties

###  config

• **config**: *[IRuntimeConfig](../interfaces/_runtime_.iruntimeconfig.md)*

*Defined in [src/Runtime.ts:17](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Runtime.ts#L17)*

___

###  projects

• **projects**: *[ProjectManager](_manager_projectmanager_.projectmanager.md)*

*Defined in [src/Runtime.ts:19](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Runtime.ts#L19)*

___

###  templates

• **templates**: *[TemplateManager](_manager_templatemanager_.templatemanager.md)*

*Defined in [src/Runtime.ts:18](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Runtime.ts#L18)*

## Methods

###  bootstrap

▸ **bootstrap**(): *Promise‹this›*

*Defined in [src/Runtime.ts:27](https://github.com/janbiasi/ableton-tools/blob/d96cf3a/packages/core/src/Runtime.ts#L27)*

**Returns:** *Promise‹this›*
