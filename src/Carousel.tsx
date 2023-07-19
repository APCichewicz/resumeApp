import Carousel from 'react-bootstrap/Carousel';

// a carousel component that displays a list of images using react-bootstrap that accepts a list of strings as props

const CarouselImg = (props: { imgList: string[] }) => {
    return (
        <Carousel>
            {props.imgList.map((img, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="block w-full h-64"
                        src={img}
                        alt="First slide"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default CarouselImg