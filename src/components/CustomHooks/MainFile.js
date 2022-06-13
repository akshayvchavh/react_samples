import useFetch from "./useFetch";


const MainFile = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const { data, isLoading, error } = useFetch(url);

    return (
        <div>
            {/* Loading info */}
            {isLoading && <h1>Loading Data Please Wait</h1>}

            {/* rendering data after loading */}
            {data && (
                <ul>
                    {data.map(user => (
                        <div id={user.id}>
                            <li key={user.id}>{user.title}</li>
                            <p key={user.id}>{user.body}</p>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MainFile;