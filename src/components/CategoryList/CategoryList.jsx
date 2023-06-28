
export default function CategoryList({categories}) {

const activeCategories = categories.map(category =>
    <li
    key = {category}
    >
        {category}
    </li>
    )

    return (
        <div>
            {activeCategories}

        </div>
    )
}