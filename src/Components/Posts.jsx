import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { FcLike } from "react-icons/fc"
import { FaRegComment } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import { MdOutlineLabel } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


const Posts = () => {

    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(errr => console.error("Error", errr))
    }, [id])

    console.log(data)

    return (
        <>
            {!data ? (
                <h1 className="mt-32">Cargando Datos</h1>
            ) : ( 

           
                <div className="bg-white flex flex-col  max-w-sm mx-auto rounded-lg shadow-xl mt-28">
                    <div className="px-6 py-4 flex ">
                        <h1 className="text-2xl font-bold text-gray-800">
                           redSocial
                        </h1>
                        <div className="flex">
                        <IoChatbubbleEllipsesOutline className="size-8 "/>                                  

                        </div>
                        
                    </div>
                    <div>
                        <img
                            src={`https://unavatar.io/${data.id}`}
                            alt="post"
                            className="w-full object-cover"
                        />
                    </div>
                     <div className="flex justify-around mt-4">
                        <FcLike className="size-8" />
                        <FaRegComment className="size-8"/>
                        <FaShareSquare className="size-8"/>
                        <MdOutlineLabel className="size-8 rotate-90"/> 
                    </div>         
                    
                   
                    <div className="px-6 py-9 flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-gray-800">
                            {data.title}
                        </h1>
                        <p className="text-gray-500">
                            {data.body}
                        </p>                                          
                        
                    </div>
                  
                    
                </div>
            
            )}
        </>
    )
}
export default Posts 