import useFetch from "./useFetch";


const MainFile = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const { data, isLoading, error } = useFetch(url);
    console.log(data);
    return (
        <div>
            {/* Loading info */}
            {isLoading && <h1>Loading Data Please Wait</h1>}

            {/* rendering data after loading */}
            {data && (
                <ul>
                    {data.map(user => (
                        <div key={user.id}>
                            <li>{user.title}</li>
                            <p>{user.body}</p>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MainFile;