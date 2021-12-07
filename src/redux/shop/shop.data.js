const SHOP_DATA = {
  books: {
    id: 1,
    title: "Books",
    routeName: "books",
    items: [
      {
        id: 1,
        name: "Open Signals",
        imageUrl:
          "https://open.umn.edu/opentextbooks/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHNMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--64816c281f1a32400ab1b08dba501f0098f7e706/04805a3a-81dc-4e34-b5be-a1306d6299d5.png",
        price: 235,
      },
      {
        id: 2,
        name: "Intermediate Fluid Mechanics",
        imageUrl:
          "https://open.umn.edu/opentextbooks/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHNMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bc9717ccd2a9843c717691efbb3c7f2681fc6c95/Title-Page_Intermediate-Fluid-Mechanics-350x453.png",
        price: 180,
      },
      {
        id: 3,
        name: "Basic Engineering Science",
        imageUrl:
          "https://open.umn.edu/opentextbooks/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBallMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2c18d4cf0b1d22bebc6df6707a10298246fe18ba/adsf.JPG",
        price: 35,
      },
      {
        id: 4,
        name: "Engineering Statics",
        imageUrl:
          "https://open.umn.edu/opentextbooks/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWdLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e1396ff351dac793f1ebfe48779704d339bbea32/sjdk.JPG",
        price: 150,
      },
      {
        id: 5,
        name: "Introduction to Industrial Engineering",
        imageUrl:
          "https://open.umn.edu/opentextbooks/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaEVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2a22f692b49e21538a01053025828446b8a66677/Introduction-to-Industrial-Engineering-Pressbooks-Cover-350x541.png",
        price: 50,
      },
      {
        id: 6,
        name: "AC Electrical Circuit Analysis",
        imageUrl:
          "https://open.umn.edu/opentextbooks/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdHdFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--27643a57a24b92cefbbd36f226d2ff7afe6f6b2f/acelecirc.png",
        price: 70,
      },
      {
        id: 7,
        name: "Thomas Calculas",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41+hWlaDk1L._SX258_BO1,204,203,200_.jpg",
        price: 100,
      },
      {
        id: 8,
        name: "Electromagnetics Vol 2",
        imageUrl:
          "https://open.umn.edu/opentextbooks/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2NDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c124b4e06b679ce85e8a99a68c63eb4943ece0be/Cover.jpg",
        price: 60,
      },
      {
        id: 9,
        name: "Basic English - Communication Skills",
        imageUrl:
          "https://law-all.com/image/cache/catalog/data/Book%20Images/Oxford%20University%20Press/2020/9780199457069-800x800.jpg",
        price: 35,
      },
      {
        id: 10,
        name: "Let us C",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61X3fZAD6OL.jpg",
        price: 60,
      },
      {
        id: 11,
        name: " Elements of Workshop Technology",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/912qhHkNxdL.jpg",
        price: 85,
      },
      {
        id: 12,
        name: "Microwave and RF Design",
        imageUrl:
          "https://open.umn.edu/opentextbooks/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1FDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0833c7ebd6751a1372377090090a6e25065a703f/978-1-4696-5697-7.jpg",
        price: 16,
      },
    ],
  },
  instruments: {
    id: 2,
    title: "Instruments",
    routeName: "instruments",
    items: [
      {
        id: 36,
        name: "Geometry Box",
        imageUrl: "https://www.scholarshoppe.com/wp-content/uploads/2020/06/camlin-geometry-box-nova.jpg",
        price: 40,
      },
      {
        id: 37,
        name: "Big Geomtry Box",
        imageUrl:
          "https://rukminim1.flixcart.com/image/416/416/ki7qw7k0-0/geometry-box/d/f/r/teachers-geometry-box-plastic-big-size-with-case-for-teaching-original-imafy2dyyghxfg6w.jpeg",
        price: 80,
      },
      {
        id: 38,
        name: "2 Chart Paper",
        imageUrl: "https://tiimg.tistatic.com/fp/1/006/131/plain-white-chart-paper-643-w410.jpg",
        price: 5,
      },
      {
        id: 39,
        name: "Rounder",
        imageUrl:
          "https://image.shutterstock.com/image-vector/compass-drawings-beautiful-new-shiny-260nw-1891220764.jpg",
        price: 10,
      },
      {
        id: 40,
        name: "Calculator",
        imageUrl:
          "https://media.wired.com/photos/5c83066025da7204699767c7/16:9/w_2400,h_1350,c_limit/calculator-1470.jpg",
        price: 160,
      },
      {
        id: 41,
        name: "Scientific Calculator",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Casio-fx115ES-5564.jpg/1200px-Casio-fx115ES-5564.jpg",
        price: 360,
      },
      {
        id: 42,
        name: "Chart case",
        imageUrl: "https://m.media-amazon.com/images/I/51VZ09F47QL._SL1100_.jpg",
        price: 10,
      },
      {
        id: 43,
        name: "Pro Compass",
        imageUrl: "https://m.media-amazon.com/images/I/517N5aMqOcL._SL1000_.jpg",
        price: 50,
      },
    ],
  },
  labcoats: {
    id: 3,
    title: "Labcoats",
    routeName: "labcoats",
    items: [
      {
        id: 18,
        name: "Navy Blue Lab Coat",
        imageUrl:
          "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/Y1716847-01",
        price: 125,
      },
      {
        id: 19,
        name: "Chemistry Lab Coat",
        imageUrl:
          "https://secureservercdn.net/192.169.221.188/3v6.5ad.myftpupload.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-06-11-at-6.09.02-PM-300x300.jpeg",
        price: 90,
      },
      {
        id: 20,
        name: "Brown Lab Coat",
        imageUrl: "https://www.protokart.com/wp-content/uploads/2019/06/IMG_4818.jpg",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Coat",
        imageUrl:
          "https://5.imimg.com/data5/SELLER/Default/2021/7/VC/IQ/YS/132658561/whatsapp-image-2021-07-10-at-15-06-04-500x500.jpeg",
        price: 65,
      },
      {
        id: 22,
        name: "Gray Coat",
        imageUrl: "https://i.ebayimg.com/images/g/hcoAAOSw1cNZ7VCI/s-l300.jpg",
        price: 85,
      },
    ],
  },
  bags: {
    id: 4,
    title: "Bags and Kits",
    routeName: "bags",
    items: [
      {
        id: 23,
        name: "Bag",
        imageUrl: "https://3.imimg.com/data3/GS/DX/MY-1586732/waterproof-college-bag-500x500.jpg",
        price: 25,
      },
      {
        id: 24,
        name: "Bag",
        imageUrl: "https://i.pinimg.com/originals/27/07/1d/27071d69713a8851f44407ed7846f052.jpg",
        price: 40,
      },
      {
        id: 25,
        name: "Bag",
        imageUrl: "https://3.imimg.com/data3/IP/UY/MY-1586732/trendy-college-bag-500x500.jpg",
        price: 30,
      },
      {
        id: 26,
        name: "Bag",
        imageUrl:
          "https://img.buzzfeed.com/buzzfeed-static/static/2019-08/26/21/asset/f18dc54364cf/sub-buzz-4288-1566855819-1.png",
        price: 80,
      },
      {
        id: 27,
        name: "Cricket Kit",
        imageUrl:
          "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/sports-health/sports-equipments/medium/20200410041309-71213.png",
        price: 45,
      },
      {
        id: 28,
        name: "Football and Pump",
        imageUrl:
          "https://rukminim1.flixcart.com/image/612/612/jthjki80/kit/y/g/h/brazuca-4-colorwith-inflating-air-pump-896523-wbr-original-imafett4d3wbjbya.jpeg",
        price: 95,
      },
      {
        id: 29,
        name: "Bat",
        imageUrl:
          "https://static.turbosquid.com/Preview/2014/09/05__05_12_24/Cricket_Bat_old_02.jpgfe9d1dfd-7f88-4334-8273-906fce45f92eLarge.jpg",
        price: 100,
      },
    ],
  },
  electronics: {
    id: 5,
    title: "Electronics",
    routeName: "electronics",
    items: [
      {
        id: 30,
        name: "Laptop",
        imageUrl: "https://5.imimg.com/data5/ZE/XE/WD/SELLER-23222063/second-hand-laptop-250x250.jpg",
        price: 10025,
      },
      {
        id: 31,
        name: "1Tb Hard Drive",
        imageUrl:
          "https://teja8.kuikr.com/i4/20190328/-2-in-1--Toshiba-1TB-hdd-laptop-hard-disk-with-external-case-VB201705171774173-ak_LWBP787741437-1553732610.jpeg",
        price: 1500,
      },
      {
        id: 32,
        name: "Gaming Laptop",
        imageUrl: "https://careergamers.com/wp-content/uploads/2020/10/MSI_Gaming_Laptop_on_wood_floor.jpg",
        price: 25000,
      },
    ],
  },
};

export default SHOP_DATA;
