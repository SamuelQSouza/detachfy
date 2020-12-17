
export default {
    render(image,) {
      return {
        id: image.id,
        path: image.path,
        url: `http://192.168.31.213:3333/uploads/${image.path}`
  
  
      }
    },
    renderMany(images){
      return images.map(image=> this.render(image))
    }
  
  }