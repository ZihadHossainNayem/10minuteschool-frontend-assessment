interface ProductTitleProps {
    title: string;
    description: string;
}

export default function ProductTitle({ title, description }: ProductTitleProps) {
    return (
        <div className="px-4">
            <h1 className="text-white text-xl md:text-4xl font-semibold py-5">{title}</h1>

            <div className="text-white/70" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
}
