interface ImageType<T> {
    className: string;
    src?: any;
    alt: string;
}

function ImageReusable<T>(props: ImageType<T>) {
    const { className, src, alt } = props;

    return (
        <img 
            alt={alt}
            className={className}
            src={src}
        />
    )
}

export default ImageReusable;