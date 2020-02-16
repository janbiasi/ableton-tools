import { Runtime } from "@ableton-tools/core";

export type BuildCommand = (runtime: Runtime) => (...args: any[]) => Promise<any>;
