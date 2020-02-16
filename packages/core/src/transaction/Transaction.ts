export enum TransactionType {
	FS,
	MEM,
}

export enum TransactionFSAction {
	WRITE,
	READ,
	UPDATE,
	DELETE,
}

export enum TransactionMEMAction {
	PERSIST,
	FLUCTUATE,
}

export const transactionTypeToActionMap = {
	[TransactionType.FS]: TransactionFSAction,
	[TransactionType.MEM]: TransactionMEMAction,
};
