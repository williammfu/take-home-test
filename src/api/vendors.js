// Mock API call
class Vendors {
  static fetchVendors() {
    return [
      {
        name: 'Ayam Koplo',
        type: 'Ayam Geprek',
        origin: 'Indonesia',
        img_url: 'https://b.zmtcdn.com/data/pictures/3/19271543/b434ea7e4057afda4a6c201b0b9014fe.jpg',
        logo_url: 'https://res.cloudinary.com/dgsgylfvr/image/upload/v1599197890/hangry-assets/brands/logo/Ayam_Koplo.png'
      },
      {
        name: 'San Gyu',
        type: 'Beef Bowl',
        origin: 'Jepang',
        img_url: 'https://res.cloudinary.com/dgsgylfvr/image/upload/c_thumb,dpr_1.5,f_auto,h_500,q_auto,w_1024/v1/hangry-website/brands/san-gyu/banner',
        logo_url: 'https://pbs.twimg.com/profile_images/1244503730143150080/tNPv72Bk_400x400.jpg'
      },
      {
        name: 'Bude Sari',
        type: 'Nasi Ayam',
        origin: 'Indonesia',
        img_url: 'https://b.zmtcdn.com/data/pictures/chains/2/19280482/26e559b11d9c407ddb5ad0e482628d51.jpg?output-format=webp',
        logo_url: 'https://scontent.fcgk15-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/77114222_101000091377327_2030950782848729088_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=85a577&_nc_ohc=Dr_lE6_nE-IAX-IFx26&_nc_ht=scontent.fcgk15-1.fna&tp=14&oh=a39436d4a40dc6448cccd6bd7be27905&oe=60BEB20C'
      }
    ]
  }
}

export default Vendors