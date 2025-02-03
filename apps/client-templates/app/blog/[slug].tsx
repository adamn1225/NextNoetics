import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    if (!params || !params.slug) {
        return { notFound: true };
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_NOETICS_CMS_API_URL}/posts/${params.slug}`);
    const post = await res.json();
    return { props: { post } };
}

interface Post {
    title: string;
    content: string;
}

export default function BlogPost({ post }: { post: Post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}