export interface DialogData {
    title: string;
    message: string;
    actionTitle: string;
    handler: () => Promise<void>;
}
