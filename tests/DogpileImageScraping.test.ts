import DogpileImageScraping from '../src/DogpileImageScraping'

describe('DogpileImageScraping', () => {
  it('should return an array of links', async () => {
    const dogpile = new DogpileImageScraping('frog')
    await dogpile.getPictures().then((links) => {
      expect(links).toBeInstanceOf(Array)
    })
  })

  it('should get an exception if query is empty', async () => {
    expect(() => new DogpileImageScraping('')).toThrowError('Query cannot be empty')
  })
})
