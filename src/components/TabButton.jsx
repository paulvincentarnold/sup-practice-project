/* Export the TabButton component (Which takes in the SELECTED BUTTON NAME) so it can be displayed in the root file (App.jsx) */
/* children is the text that is outputted between the <TabButton> tags in the root file (App.jsx) */
export default function TabButton({children, onSelect, isSelected}) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}