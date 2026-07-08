/**
 * Resolve the path to the p2pd binary, downloading it on first use when it has
 * not been installed yet. Pass `{ autoDownload: false }` to resolve only an
 * already-installed binary and throw when it is missing.
 *
 * @param {{ autoDownload?: boolean }} [options]
 * @returns {string}
 */
export function path(options?: {
    autoDownload?: boolean;
}): string;
//# sourceMappingURL=index.d.ts.map