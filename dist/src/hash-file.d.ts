/**
 * @typedef {import('multiformats/cid').CID} CID
 */
/**
 * @param {string} filePath
 * @returns {Promise<CID>}
 */
export function hashFile(filePath: string): Promise<CID>;
export type CID = import("multiformats/cid").CID;
//# sourceMappingURL=hash-file.d.ts.map