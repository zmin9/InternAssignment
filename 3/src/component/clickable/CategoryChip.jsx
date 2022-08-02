import Chip from './Chip';

function CategoryChip({ category, selected, onClick }) {
	const getShortCategory = (name) =>
		name.length > 12 ? `${name.slice(0, 10)}⋯` : name;
	return (
		<Chip
			round
			selected={selected}
			onClick={() => onClick(category)}
		>
			{getShortCategory(category)}
		</Chip>
	);
}

export default CategoryChip;
