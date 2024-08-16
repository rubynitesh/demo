export default function TabButton({children, onSelect ,isSelected})
{

    console.log('TABBUTTON component Executing!');
    
    return (
    <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        
    </li>

    );
}