export const createBreedsData = (data: string[]) => {
  return data.map((str: string, idx: number) => ({
    id: idx,
    breed: str.split('/')[str.split('/').length - 2],
    img: str,
  }))
}