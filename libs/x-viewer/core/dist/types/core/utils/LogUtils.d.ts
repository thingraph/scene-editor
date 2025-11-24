import * as loglevel from "loglevel";
export declare const log: {
    default: loglevel.RootLogger;
    noConflict(): any;
    getLogger(name: string | symbol): loglevel.Logger;
    getLoggers(): {
        [name: string]: loglevel.Logger;
    };
    levels: loglevel.LogLevel;
    methodFactory: loglevel.MethodFactory;
    trace(...msg: any[]): void;
    debug(...msg: any[]): void;
    log(...msg: any[]): void;
    info(...msg: any[]): void;
    warn(...msg: any[]): void;
    error(...msg: any[]): void;
    setLevel(level: loglevel.LogLevelDesc, persist?: boolean | undefined): void;
    getLevel(): 0 | 1 | 2 | 3 | 4 | 5;
    setDefaultLevel(level: loglevel.LogLevelDesc): void;
    resetLevel(): void;
    enableAll(persist?: boolean | undefined): void;
    disableAll(persist?: boolean | undefined): void;
    rebuild(): void;
};
/**
 * Sets log level.
 * Note that, we limit user to set only some of the levels.
 */
export declare const setLogLevel: (level: string) => void;
