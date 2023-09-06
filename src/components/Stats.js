export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding items to the list 🚀</em>
      </footer>
    );
  }
  const itemsCount = items.length;
  const packedItemsCount = items.filter((item) => item.packed).length;
  const packedPrecentage = Math.round((packedItemsCount / itemsCount) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPrecentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${itemsCount} items in your list, and you already packed ${packedItemsCount} (${packedPrecentage}%)`}
      </em>
    </footer>
  );
}
