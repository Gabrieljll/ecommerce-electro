import './ItemListContainer.css'

export const ItemListContainer = ({ greeting }) => {

  return (
    
    <div className="itemList">
      <h1 className="greeting">{ greeting }</h1>
    </div>
    )
}