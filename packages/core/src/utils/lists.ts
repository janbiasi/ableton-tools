export const getIndexOfObjectListItem = <T, I extends string | number>(
	list: T[],
	needle: I,
	lookup: (item: T) => I
) => {
	return list.map(lookup).indexOf(needle);
};
