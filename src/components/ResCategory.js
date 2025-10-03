import ItemList from "./ItemList";
const ResCategory=({data,showItems,setShowIndex})=>{
    const handleclick=()=>{
        setShowIndex();
    }
    
    return(
    <div>
        <div className="w-6/12 mx-auto my-6 shadow-lg bg-gray-50 p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>
        <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/>}
        </div>
         </div>)
}
export default ResCategory;