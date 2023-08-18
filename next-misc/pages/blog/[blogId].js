import Head from "next/head"

function Blog({ title, description }) {

    return (
        <>
            <Head><title>{title}</title><meta name='description' content={description} /></Head>
            <h1 className="content">Env user : {process.env.DB_USER} & Password : {process.env.DB_PASSWORD}</h1>
            <h1 className="content">Env Analytics : {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} & Display Name : {process.env.NEXT_PUBLIC_DISPLAY_NAME}</h1>
        </>
    )

}

export default Blog

export async function getServerSideProps() {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD

    console.log(`Connecting to Database with username ${user} & password ${password}`)

    return {
        props: {
            title: 'Article Title',
            description: 'Article Description'
        }
    }
}

// export async function getStaticPaths() {
//     return {
//         paths: [{ params: { blogId: '1' } }],
//         fallback: true,
//     }
// }

// export async function getStaticProps() {
//     return {
//         props: {
//             title: 'Article Title',
//             description: 'Article Description'
//         }

//     }
// }