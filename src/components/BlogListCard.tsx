import '../styles/BlogListCard.css';

interface BlogListCardProps {
    title: string;
    description: string;
    href: string;
}

const BlogListCard = ({ title, description, href }: BlogListCardProps) => {
    return (
        <div className="blog-list-card">
            <div className='text'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='button-wrapper'><a href={href}><button>Read More</button></a></div>
        </div>
    );
}

export default BlogListCard;