import fs from 'fs'
import { join } from 'path'
import process from 'process'
import yaml from 'js-yaml'

const getFile = (): string =>
	fs.readFileSync(join(process.cwd(), 'public', 'prices.yaml'), 'utf-8')

export type PriceListInterface = (
	| {
			name: null
			prices: {
				name: string
				price: number[]
			}[]
	  }
	| {
			name: string
			prices: {
				name: string
				price: number[]
			}[]
	  }
)[]

export const getPricelist = (): PriceListInterface => yaml.load(getFile())
