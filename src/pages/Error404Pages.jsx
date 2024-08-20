import { useRouteError } from "react-router-dom"

export default function Error404Pages() {
    const error =  useRouteError();

    return (
        <>
        <div>
            <h1>ERROR: {error.status} </h1>
            <p>  {error} - {error.data}</p>
        </div>
        </>
    )
}