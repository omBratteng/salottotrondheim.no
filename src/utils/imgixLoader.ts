import { ImageLoaderProps } from 'next/image'

import { IMGIX_URL } from 'site-config'

const imgixLoader = ({ src, width, quality }: ImageLoaderProps): string => {
	const url = new URL(`${IMGIX_URL}${src}`)
	const params = url.searchParams

	params.set('auto', params.getAll('auto').join(',') || 'format,compress')
	params.set('fit', params.get('fit') || 'max')
	params.set('w', params.get('w') || width.toString())
	params.set('q', quality?.toString() || '75')

	return url.href
}

export default imgixLoader
