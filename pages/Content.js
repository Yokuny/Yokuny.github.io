export default function Content(){
    const contentPost = [
        {title: 'talk less, listen more', platform: 'blog', link: 'https://thereformedbroker.com/2020/12/30/talk-less-listen-more/'},
        {title: 'bitcoin is a disaster', platform: 'blog', link: 'https://www.metzdowd.com/pipermail/cryptography/2020-December/036510.html'},
        {title: 'what is life?', platform: 'magazine', link: 'https://berthub.eu/articles/posts/what-is-life/'},
    ];
    return(
        <>
            {contentPost.map(content => (
                <li>
                    <a className="text-green-600 hover:bg-green-600 hover:text-black duration-500" href={content.link}>{content.title}</a>
                    <a className="mx-4 text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{content.platform}</a>
                </li>
            ))}
        </>
    );
}