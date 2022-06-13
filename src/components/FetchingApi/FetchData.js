
import React, { useEffect, useState } from "react"

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading , setIsLoading ] = useState(true);
  const [ error , setError] = useState(null);



// Method 1 :- handling promises with .then

  const fetchDatas = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        if(!response.ok){
            throw Error("Response is not OK");
        }
        setError(null);
        return response.json()
      })
      .then(data => {
        setUsers(data);
         setIsLoading(false);
      })
      .catch (err => {
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      });
  }


// Method 2 :- handling promises with async/await  
    // const fetchDatas = async ()=> {
    //     const fetchLink = await fetch("https://jsonplaceholder.typicode.com/posts");
    //     const rawData = await fetchLink.json();
    //     setUsers(rawData);
    //     setIsLoading(false);
    // };



  useEffect(() => {
    fetchDatas();
  }, [])

  return (
    <div>
        {/* showing error if catch */}
        {error}


            {/* Loading info */}
        { isLoading && <h1>Loading Data Please Wait</h1> }

        {/* rendering data after loading */}
      {users && (
        <ul>
          {users.map(user => (
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

export default FetchData







// import { useEffect, useState } from "react";

// const FetchData = () => {
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const url = "https://jsonplaceholder.typicode.com/posts"

    // const fetching = async () => {
    //         const rawData = await fetch(url);
    //         const newData = await rawData.json();
    //         setData(newData);
    //         data && setIsLoading(false);
    //         console.log(data);
    //         console.log(isLoading);

    // }

//     const fetchData = () => {
//         const rawData = async () =>{
//             const newData = await fetch(url);
//             const response = await newData.json();
//             setData(response);
//             console.log(data);
//         }   
//         rawData(); 
//     }
    
//     useEffect(() => {
//         fetchData();
//     }, [])

//     return (
//         <>
//             <div>
//                 {
//                     data.map(dat => {
//                         <div>
//                             <h1>{dat.title}</h1>
//                         </div>
//                     })
//                 }
//             </div>
//         </>
//     )
//     // return { data , isLoading , error}
// }

// export default FetchData;