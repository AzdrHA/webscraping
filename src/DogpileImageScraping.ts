import AbstractWebScraping from './AbstractWebScraping'
import * as util from 'util'

export default class DogpileImageScraping extends AbstractWebScraping {
  /**
   * Creates an instance of DogpileImageScraping.
   *
   * @param {string} [query=''] Query to search
   * @memberof DogpileImageScraping
   * @throws If query is empty
   * @example
   * const dogpile = new DogpileImageScraping('frog')
   * dogpile.getPictures().then((links) => {
   *  console.log(links)
   *  // => [ 'https://www.frog.org/', 'https://www.frog.org/', ... ]
   */
  public constructor (query: string = '') {
    if (query === '') throw new Error('Query cannot be empty')
    super(util.format('https://results.dogpile.com/serp?qc=images&q=%s', query))
  }

  /**
   * Get all the links from the page
   *
   * @returns {Array<string | undefined>} Promise Array of links
   * @memberof DogpileImageScraping
   */
  public async getPictures (): Promise<Array<string | undefined>> {
    const $ = await this.getDOM()
    const links = $('.image a.link')
    return new Array(links.length).fill(0).map((_v, i) => links.eq(i).attr('href'))
  }
}
