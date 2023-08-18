import Head from "next/head"

function News({ data }) {

    return (<><h1 className="content">{data}</h1></>)

}

export default News

export async function getStaticProps(hulk) {
    console.log('Running Static Props', hulk.previewData)
    return {
        props: {
            data: hulk.preview ? 'List of Draft Articles' : 'List Of Published Articles'
        },

    }
}