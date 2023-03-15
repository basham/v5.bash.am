export function groupBy(source, selectorOrKey) {
	const selector = typeof selectorOrKey === 'string' ? (item) => item[selectorOrKey] : selectorOrKey
	const m = source.reduce((map, item) => {
		const group = selector(item);
		if (!map.has(group)) {
			map.set(group, []);
		}
		map.set(group, [...map.get(group), item]);
		return map;
	}, new Map());
	return Object.fromEntries(m);
}
