import bot from '../../assets/Icons/bot.svg'

export default function Design() {
    return (
        <div>
            <div className="h-[360px] w-[280px] bg-[#cdd7d8] absolute rounded-[20px] overflow-hidden"
                style={{
                    top: '380px',
                    right: '20px',
                    bottom: '570px',
                }}>
                <div className="flex flex-col justify-between gap-1">
                    <div className="flex flex-row">
                        <div className="h-[130px] w-[150px] bg-[#8aa6aa] rounded-r-[20px]"></div>
                        <div className="h-[130px] w-[150px] bg-[#b9c7c9] rounded-l-[20px] ml-[2px]"></div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <div className="h-[100px] w-[80px] bg-[#8aa6aa] rounded-r-[20px]"></div>
                        <div className="h-[100px] w-[180px] bg-white rounded-[20px] ml-[2px] font-bold text-[20px] flex flex-col justify-center items-center">
                            <img src={bot} className='h-[30px] w-[60px]'></img>
                            <p>150+</p>
                            <p>Moulds</p>
                        </div>
                        <div className="h-[100px] w-[80px] bg-[#b9c7c9] rounded-l-[20px] ml-[2px]"></div>
                    </div>
                    <div className="flex flex-row">
                        <div className="h-[130px] w-[150px] bg-[#b9c7c9] rounded-r-[20px]"></div>
                        <div className="h-[130px] w-[150px] bg-[#8aa6aa] rounded-l-[20px] ml-[2px]"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}