
import { useState } from "react"
import CarsList from "../../components/CarsPage/CarsList";
import CarForm from "../../components/CarsPage/CarForm";

const CarsPage = () => {
  const INITIAL_CARS = [
    {
        brand: 'Volvo',
        model: 'xc 70',
        engine: 'diesel',
        basePrice: 17000,
        mileage: 15000,
        color: 'red',
        image: 'https://res.cloudinary.com/caradvice/image/private/q_auto/v1/678e9ed107c61a5d478f71703e259aca',
        discount: 15,
    },
    {
        brand: 'Toyota',
        model: 'Camry',
        engine: 'petrol',
        basePrice: 20000,
        mileage: 250000,
        color: 'blue',
        image: 'https://www.cnet.com/a/img/resize/2bf1d319e1b6b6135eaa226c0a48b2c557501a8b/hub/2021/08/20/4b392287-347f-4374-b152-69e0366821a7/2021-toyota-camry-trd-4.jpg?auto=webp&width=1200',
        discount: 50,
    },
    {
        brand: 'Honda',
        model: 'Civic',
        engine: 'electric',
        basePrice: 22000,
        mileage: 300000,
        color: 'special blue',
        image: 'https://i.pinimg.com/originals/7b/66/a9/7b66a9330e4a74fe3f826f01a83c988b.jpg',
        discount: 7,
    },
    {
        brand: 'Ford',
        model: 'Fiesta',
        engine: 'petrol',
        basePrice: 15000,
        mileage: 600000,
        color: 'black',
        image: 'https://m.atcdn.co.uk/vms/media/%7Bresize%7D/f1d4aa6eaf0441a7b76fa7075757c607.jpg',
        discount: 23,
    },
    {
        brand: 'BMW',
        model: 'X3',
        engine: 'diesel',
        basePrice: 35000,
        mileage: 0,
        color: 'white',
        image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/110503/x3-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80',
        discount: 0,
    },
    {
        brand: 'Mercedes-Benz',
        model: 'C-Class',
        engine: 'electric',
        basePrice: 40000,
        mileage: 0,
        color: 'gray',
        image: 'https://media.ed.edmunds-media.com/mercedes-benz/c-class/2024/oem/2024_mercedes-benz_c-class_sedan_amg-c-43_fq_oem_1_1280.jpg',
        discount: 0,
    },
    {
        brand: 'Audi',
        model: 'A4',
        engine: 'petrol',
        basePrice: 38000,
        mileage: 0,
        color: 'red',
        image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/51909/a4-exterior-left-front-three-quarter-3.jpeg?q=80&q=80',
        discount: 0,
    },
    {
        brand: 'Chevrolet',
        model: 'Malibu',
        engine: 'diesel',
        basePrice: 25000,
        mileage: 0,
        color: 'blue',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo85ik5iPZia1Vr9mbSu34FNZVHx0upGhBWeAPXCF1Vw&s',
        discount: 0,
    },
    {
        brand: 'Nissan',
        model: 'Altima',
        engine: 'petrol',
        basePrice: 23000,
        mileage: 0,
        color: 'silver',
        image: 'https://i.gaw.to/content/photos/55/01/550195-nissan-altima-2022.jpeg',
        discount: 0,
    }
  ];

  const [cars, setCars] = useState(INITIAL_CARS)

  const newCarHandler = (newCar) => setCars(prevState => [newCar, ...prevState])

  return (
    <div>
      <CarForm onNewCar={newCarHandler} />

      <CarsList data={cars} />
    </div>
  )
}

export default CarsPage