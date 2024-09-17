let count = 0;

export function uniqueId () {
	return `id-${++count}`;
}
