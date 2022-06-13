import FetchData from "./FetchingApi/FetchData";


const Home =() =>{

    // const [data , isLoading , error] = useFetchData("https://jsonplaceholder.typicode.com/posts");

    return(
        <div>
            <FetchData />
        </div>
    )
}

export default Home;