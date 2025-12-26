const EducationalInstitutionSchema = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Amadlelo Aluhlaza Secondary School",
        "url": window.location.origin,
        "logo": "/images/logo.jpg",
        "description": "Amadlelo Aluhlaza Secondary School provides quality education with a focus on academic excellence, character development, and holistic growth for students.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1073 Phila Myeni Avenue",
            "addressLocality": "Mkhondo",
            "addressRegion": "Piet Retief",
            "postalCode": "2380",
            "addressCountry": "ZA"
        },
        "telephone": "0178262483",
        "email": "info@amadleloaluhlaza.co.za",
        "sameAs": [
            "https://www.facebook.com/amadleloaluhlaza",
            "https://twitter.com/AmadleloAluhlaza",
            "https://www.instagram.com/amadleloaluhlaza"
        ],
        "foundingDate": "2005"
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(schemaData)}
        </script>
    );
};

export default EducationalInstitutionSchema;
