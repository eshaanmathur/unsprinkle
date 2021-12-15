function ResposiveImage({ className, src, alt }) {
    const imagePathPrefix = src.replace('.jpg', '');

    return (
        <img
            className={className}
            src={`${imagePathPrefix}.avif`}
            alt={alt}
            srcSet={`
                ${imagePathPrefix}.avif 1x,
                ${imagePathPrefix}@2x.avif 2x,
                ${imagePathPrefix}@3x.avif 3x
            `}
        />
    );
}

export default ResposiveImage;
