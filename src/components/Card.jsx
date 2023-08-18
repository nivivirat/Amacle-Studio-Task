export default function Card({ content, img }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-cdd7d8 flex items-center justify-center mb-2">
                <img src={img} alt="Card Image" className="w-16 h-16" />
            </div>
            <div className="text-center text-cdd7d8">{content}</div>
        </div>
    );
}
