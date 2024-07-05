export default async function compressImage(file: File): Promise<Blob> {
  return new Promise((resolve) => {
    const image = new Image()
    const reader = new FileReader()

    reader.onload = async (event) => {
      if (event.target && typeof event.target.result === 'string') {
        image.src = event.target.result

        image.onload = () => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')

          const maxWidth = 1000
          const maxHeight = 800
          let width = image.width
          let height = image.height

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width
              width = maxWidth
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height
              height = maxHeight
            }
          }

          canvas.width = width
          canvas.height = height

          ctx?.drawImage(image, 0, 0, width, height)

          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(blob)
              }
            },
            'image/jpeg',
            0.8,
          ) // Adjust the quality as needed
        }
      }
    }

    if (file instanceof Blob) {
      reader.readAsDataURL(file)
    }
  })
}
