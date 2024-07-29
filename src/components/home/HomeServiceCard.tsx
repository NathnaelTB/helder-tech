interface props {
    img: string;
    title: string;
    description: string;
}

const HomeServiceCard: React.FC<props> = (props) => {
    return (
        <div className="w-[20%] p-[15px] flex flex-col items-center justify-center gap-[20px]">
            <img src={props.img} alt="" />
            <h2 className="text-[20px] text-titleFont font-bold text-center">
                {props.title}
            </h2>
            <p className="text-[16px] text-[#3a3a3a] text-center leading-[130%] tracking-[2%]">
                {props.description}
            </p>
        </div>
    );
}

export default HomeServiceCard;