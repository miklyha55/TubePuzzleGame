export interface IROPipeProps {
    readonly type: string,
    readonly direction: number[],
    readonly angle: number,
    readonly isLock: boolean | void,
}