import { ENCODING, ABLETON_TOOLS_ROOT } from './const';
import { IProjectSchema, IProjectBackupSchema, IProjectMetaSchema } from './schema/Project';
import { ITemplateSchema } from './schema/Template';
import { ProjectManager, PROJECT_MANAGER_META_FILE } from './manager/ProjectManager';
import { TemplateManager } from './manager';
import { Runtime } from './Runtime';
import { Database } from './Database';
import {
	BackupRestorationError,
	InvariantViolationError,
	ProjectNotFoundError,
	ProjectMetaNotFoundError,
	DatabaseError,
} from './errors';
import {
	findLiveSetsInFolder,
	createArchive,
	unpackArchive,
	fileExists,
	folderExists,
	getLastPathFragment,
	invariant,
	safeDirName,
	formatBytes,
	uuid,
} from './utils';

export {
	// typedefs
	ITemplateSchema,
	IProjectSchema,
	IProjectBackupSchema,
	IProjectMetaSchema,
	// constants
	ENCODING,
	ABLETON_TOOLS_ROOT,
	PROJECT_MANAGER_META_FILE,
	// core
	Runtime,
	Database,
	ProjectManager,
	TemplateManager,
	// utilities
	findLiveSetsInFolder,
	createArchive,
	unpackArchive,
	fileExists,
	folderExists,
	getLastPathFragment,
	invariant,
	safeDirName,
	formatBytes,
	uuid,
	// errors
	BackupRestorationError,
	InvariantViolationError,
	ProjectNotFoundError,
	ProjectMetaNotFoundError,
	DatabaseError,
};
