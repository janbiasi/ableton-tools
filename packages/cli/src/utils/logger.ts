import symbols from 'log-symbols';
import chalk from 'chalk';

export const success = (message: string) => `${chalk.green(symbols.success)} ${message}`;
export const error = (message: string) => `${chalk.red(symbols.success)} ${message}`;
export const warning = (message: string) => `${chalk.red(symbols.warning)} ${message}`;
export const info = (message: string) => `${chalk.red(symbols.info)} ${message}`;
