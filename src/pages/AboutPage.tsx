import React from 'react';
import MetaTags from '../components/MetaTags';
import ResponsiveImage from '../components/ResponsiveImage';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white">
            <MetaTags
                title="About Us - Amadlelo Aluhlaza Secondary School"
                description="Learn about Amadlelo Aluhlaza Secondary School's history, identity, and educational philosophy. A no-fee Quintile 1 school serving Mkhondo."
                keywords={['about us', 'history', 'school identity', 'Amadlelo Aluhlaza', 'Mkhondo']}
                url="/about"
            />

            {/* Header */}
            <section className="bg-primary text-primary-foreground py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">About Amadlelo Aluhlaza</h1>
                    <p className="text-xl opacity-90">Building a legacy of knowledge and values.</p>
                </div>
            </section>

            {/* Identity & Status */}
            <section className="py-16">
                <div className="container mx-auto px-4 w-[90%] md:w-[80%]">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">School Identity & Status</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-muted-foreground">
                        <div className="bg-muted p-6 rounded-lg">
                            <ul className="space-y-4">
                                <li><strong>Name:</strong> Amadlelo Aluhlaza Secondary School</li>
                                <li><strong>Location:</strong> Ethandakukhanya, Mkhondo, Piet Retief, Mpumalanga</li>
                                <li><strong>District:</strong> Gert Sibande District</li>
                                <li><strong>EMIS Number:</strong> 800030445</li>
                            </ul>
                        </div>
                        <div className="bg-muted p-6 rounded-lg">
                            <ul className="space-y-4">
                                <li><strong>Phase:</strong> Secondary</li>
                                <li><strong>Quintile Rating:</strong> Quintile 1</li>
                                <li><strong>Type:</strong> Public, No-fee School</li>
                                <li><strong>Government Funding:</strong> Yes, receives annual funding</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* History & Infrastructure */}
            <section className="py-16 bg-muted">
                <div className="container mx-auto px-4 w-[90%] md:w-[80%]">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our History & Infrastructure</h2>

                    <div className="space-y-8 text-lg text-muted-foreground text-center max-w-4xl mx-auto">
                        <p>
                            Amadlelo Aluhlaza Secondary School serves a settlement within the Ethandakukhanya area.
                            Historically, we have faced significant overcrowding. To alleviate this, the government established
                            <strong> Inqubeko Secondary School</strong> (functional by 2012) and <strong>Ubuhlebuzile Secondary School</strong> (opened in 2015).
                        </p>
                        <p>
                            Despite challenges, we continue to grow. On 9 April 2024, we received a donation of 100 classroom desks from the
                            Mpumalanga MEC for Public Works, Roads, and Transport, <strong>Mandla Ndlovu</strong>, supported by the Mkhondo Local Municipality
                            Executive Mayor, Ngelosi Ndlovu, demonstrating the strong support from our local leadership.
                        </p>
                    </div>
                </div>
            </section>

            {/* Educational Philosophy */}
            <section className="py-16">
                <div className="container mx-auto px-4 w-[90%] md:w-[80%] text-center">
                    <h2 className="text-3xl font-bold text-primary mb-8">Educational Philosophy</h2>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto italic">
                        "The school aims to give expression to knowledge and values worth learning in South Africa, ensuring children acquire skills meaningful to their own lives while promoting knowledge in local contexts and remaining sensitive to global imperatives."
                    </p>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
