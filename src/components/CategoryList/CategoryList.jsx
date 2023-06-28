import "./CategoryList.css"

export default function CategoryList({ categories }) {

    const activeCategories = categories.map(category =>
        <li className="side-nav-li"
            key={category}
        >
            <div className="side-nav-li-icon"></div> {category}
        </li>
    )

    return (
        <>
            {activeCategories}
        </>
    )
}