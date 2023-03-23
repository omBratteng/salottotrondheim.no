import { ImageLoaderProps } from 'next/legacy/image'

import { IMGIX_URL } from 'site-config'

const imgixLoader = ({ src, width, quality }: ImageLoaderProps): string =>
	`${IMGIX_URL}${src}?auto=format,compress&w=${width}&q=${quality || 75}`

export default imgixLoader
