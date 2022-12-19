import './carouselItem.css';
function CarouselItem({itemTitle, iteamDescription}) {
    return (
        <div className="item_main">
            <h2>{itemTitle}</h2>
            <h4>{iteamDescription}</h4>
        </div>
    );
}

export default CarouselItem;
