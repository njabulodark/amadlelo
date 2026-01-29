import React from 'react';

interface MetaTagsProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    keywords?: string[];
    author?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
    title = 'Nqobile Primary School',
    description = 'Nqobile Primary School is a No-Fee Public Ordinary School in Piet Retief, serving as a gateway to opportunity for the Ethandakukhanya community.',
    image = '/images/homepage/school-building.jpg', // Placeholder or keep existing if generic, but updating name
    url = '/',
    type = 'website',
    keywords = ['Nqobile Primary School', 'Piet Retief', 'Ethandakukhanya', 'primary education', 'Mpumalanga schools'],
    author = 'Nqobile Primary School'
}) => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="author" content={author} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={`${window.location.origin}${url}`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </>
    );
};

export default MetaTags;
