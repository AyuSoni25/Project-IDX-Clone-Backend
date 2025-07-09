import util from 'node:util';
import childProcess from 'node:child_process';

export const execUtility = util.promisify(childProcess.exec);