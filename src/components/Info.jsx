
export default function Info({id}) {
    const data = [
        {
            id:1, 
            image_path:"/augustus3.png",
        },
        {
            id:2, 
            image_path:"/Las-Medulas,-Spain.jpg",
        }


    ]
    return(
        <div className="absolute top-0 w-1/2">
            {data.map(item =>(
                item.id === id ? <img key={id} src={item.image_path} alt="" className="h-screen w-screen object-cover"/> : null
            ))}
    
        </div>
    )

}