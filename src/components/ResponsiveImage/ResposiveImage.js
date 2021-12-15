function ResposiveImage({ className, src, alt }) {
    const imagePathPrefix = src.replace('.jpg', '');

    return (
        <picture>
            <source
                type="image/avif"
                srcSet={`
                 ${imagePathPrefix}.avif 1x,
                 ${imagePathPrefix}@2x.avif 2x,
                 ${imagePathPrefix}@3x.avif 3x
                 `}
            />
            <source
                type="image/jpeg"
                srcSet={`
                 ${imagePathPrefix}.jpg 1x,
                 ${imagePathPrefix}@2x.jpg 2x,
                 ${imagePathPrefix}@3x.jpg 3x
                 `}
            />

            <img className={className} src={src} alt={alt} />
        </picture>
    );
}

export default ResposiveImage;
