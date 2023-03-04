import AbstractWebScraping from './AbstractWebScraping'
import * as util from 'util'

export default class DogpileImageScraping extends AbstractWebScraping {
  public constructor (query: string | null = '') {
    if (query === '') throw new Error('Query cannot be empty')
    super(util.format('https://results.dogpile.com/serp?qc=images&q=%s', query))
  }

  public async getPictures (): Promise<Array<string | undefined>> {
    const $ = await this.getDOM()
    const links = $('.image a.link')
    return new Array(links.length).fill(0).map((_v, i) => links.eq(i).attr('href'))
  }
}
