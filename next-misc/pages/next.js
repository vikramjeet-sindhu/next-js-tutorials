//import Image from "next/image"
function Next() {

    return (
        <div>{['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j'].map((path) => {
            return (
                <div key={path}>Next.js</div>
            )
        })}</div>
    )

}

export default Next