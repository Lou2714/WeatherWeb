const DetailItem = ({ image, text }) =>{

    return(
        <section className="flex flex-row lg:gap-2">
            <img src={image} alt="Máxima temperatura" className="place-self-center"/>
            <h3 className="pt-3 text-lg lg:text-2xl">{text}</h3>
        </section>
    )

}

export default DetailItem;