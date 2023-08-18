export default function Card({ content, img, isSelected, onClick }) {
    return (
        <div
            className={`flex flex-col items-center h-[166px] w-[206px] ${isSelected ? "bg-[#f4f3f8]" : "bg-white"} rounded-lg`}
            onClick={onClick}
            style={{
                borderRadius: '12px',
                background: isSelected ? '#f4f3f8' : 'var(--white, #FFF)',
            }}
        >
            <div className="w-[80px] h-[80px] rounded-full bg-[#cdd7d8] flex items-center justify-center mb-2" style={{ margin: '20px auto 0' }}>
                <img src={img} alt="Card Image" className="w-[35px] h-[35px]" />
            </div>
            <div className="text-center text-lg text-cdd7d8">{content}</div>
        </div>
    );
}
