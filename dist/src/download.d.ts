/**
 * @param {object} [options]
 * @param {string} [options.version]
 * @param {string} [options.platform]
 * @param {string} [options.arch]
 * @param {string} [options.installPath]
 * @param {number} [options.retries]
 * @returns {Promise<string>}
 */
export function download(options?: {
    version?: string | undefined;
    platform?: string | undefined;
    arch?: string | undefined;
    installPath?: string | undefined;
    retries?: number | undefined;
}): Promise<string>;
//# sourceMappingURL=download.d.ts.map