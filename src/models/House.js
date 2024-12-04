export class House {
    constructor(data){
        this.bedrooms = data.bedrooms, 
        this.bathrooms = data.bathrooms, 
        this.levels = data.levels,
        this.imgUrl = data.imgUrl || 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg', 
        this.year = data.year,
        this.price = data.price,
        this.description = data.description,
        this.creator = data.creator,
        this.id = data.id
    }
}
