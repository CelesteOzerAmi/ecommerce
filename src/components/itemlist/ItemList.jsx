import Item from "../item/Item"
import "./itemlist.css"

const ItemList = ({ productos }) => {
    return (
        <div className="item-card">
            {
                productos.map((producto) => (
                    <Item producto={producto} key={producto.id} />
                ))
            }
        </div>
    )
}

export default ItemList