import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home(){

    const API_URL = "https://fakestoreapi.com/products";

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
 
    async function getData(){
        setLoading(true);

        try{
            let response = await fetch(API_URL);
            let respons = await response.json();
            setPosts(respons);
            console.log(respons);
        }
        catch(error){
            console.log("error");
        }
        setLoading(false);
    }
    
    useEffect(()=>{
        getData();
    },[]);

    return (
        <div className="cartContainerMain">
            <div className="cartContainer">
            {
             loading ? (<Spinner/>) : 
             (
                posts.length > 0 ?

                ( posts.map((post)=>{ return <Product post={post} key={post.id}></Product> }) ) : 
                
                ( <div className="noBlogFound">No Blog found</div> )
             )
            }
            </div>
        </div>
    )
}

export default Home;