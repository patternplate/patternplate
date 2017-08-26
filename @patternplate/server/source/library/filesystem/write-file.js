import {
	writeFile
} from 'fs';
import denodeify from 'denodeify';

export default denodeify(writeFile);
