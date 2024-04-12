import type { CodemodListReturn } from "@codemod-com/utilities";

export type RewriteMessage = Readonly<{
	kind: "rewrite";
	oldPath: string;
	newDataPath: string;
}>;

export type FinishMessage = Readonly<{
	kind: "finish";
}>;

export type ProgressMessage = Readonly<{
	kind: "progress";
	recipeCodemodName?: string;
	processedFileNumber: number;
	processedFileName: string;
	totalFileNumber: number;
}>;

export type DeleteMessage = Readonly<{
	kind: "delete";
	oldFilePath: string;
}>;

export type MoveMessage = Readonly<{
	kind: "move";
	oldFilePath: string;
	newFilePath: string;
}>;

export type CreateMessage = Readonly<{
	kind: "create";
	newFilePath: string;
	newContentPath: string;
}>;

export type CopyMessage = Readonly<{
	kind: "copy";
	oldFilePath: string;
	newFilePath: string;
}>;

export type MetadataPathMessage = Readonly<{
	kind: "metadataPath";
	path: string;
}>;

export type ErrorMessage = Readonly<{
	kind: "error";
	message: string;
	path?: string;
}>;

export type StatusUpdateMessage = Readonly<{
	kind: "status";
	message: string;
}>;

export type NamesMessage = Readonly<{
	kind: "codemodList";
	codemods: CodemodListReturn;
}>;

export type OperationMessage =
	| RewriteMessage
	| FinishMessage
	| ProgressMessage
	| DeleteMessage
	| MoveMessage
	| CreateMessage
	| CopyMessage
	| MetadataPathMessage
	| ErrorMessage
	| StatusUpdateMessage
	| NamesMessage;
