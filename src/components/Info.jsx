
export default function Info({image_path}) {
    console.log(typeof(image_path))
    console.log(image_path)
    return(
        <div>
            <section className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image_path})` }}>
                <p>thsi is it</p>
            </section> 
        </div>
    )

}