import Link from 'next/link'


function NewsPage(){
    return (
        <>
        <h1>cccc</h1>
        <ul>
            <li>
                <a href="/news/xxx">xxx</a>
            </li>
            <li>
                <Link href="/news/xxx">xxx</Link>
            </li>
        </ul>
        </>
    )
}

export default NewsPage